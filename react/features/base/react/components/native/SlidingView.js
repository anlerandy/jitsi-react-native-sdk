"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const slidingviewstyles_1 = require("./slidingviewstyles");
/**
 * A generic animated slider view to be used for animated menus.
 */
class SlidingView extends react_1.PureComponent {
    /**
     * Implements React's {@link Component#getDerivedStateFromProps()}.
     *
     * @inheritdoc
     */
    static getDerivedStateFromProps(props, prevState) {
        return {
            showOverlay: props.show || prevState.showOverlay
        };
    }
    /**
     * Initializes a new {@code SlidingView} instance.
     *
     * @inheritdoc
     */
    constructor(props) {
        super(props);
        const { height, width } = react_native_1.Dimensions.get('window');
        const { position } = props;
        let positionOffset = height;
        if (position === 'left' || position === 'right') {
            positionOffset = width;
        }
        this.state = {
            showOverlay: false,
            sliderAnimation: new react_native_1.Animated.Value(0),
            positionOffset
        };
        // Bind event handlers so they are only bound once per instance.
        this._onHardwareBackPress = this._onHardwareBackPress.bind(this);
        this._onHide = this._onHide.bind(this);
    }
    /**
     * Implements React's {@link Component#componentDidMount()}.
     *
     * @inheritdoc
     */
    componentDidMount() {
        react_native_1.BackHandler.addEventListener('hardwareBackPress', this._onHardwareBackPress);
        this._mounted = true;
        this._setShow(this.props.show);
    }
    /**
     * Implements React's {@link Component#componentDidUpdate()}.
     *
     * @inheritdoc
     */
    componentDidUpdate(prevProps) {
        const { show } = this.props;
        if (prevProps.show !== show) {
            this._setShow(show);
        }
    }
    /**
     * Implements React's {@link Component#componentWillUnmount()}.
     *
     * @inheritdoc
     */
    componentWillUnmount() {
        react_native_1.BackHandler.removeEventListener('hardwareBackPress', this._onHardwareBackPress);
        this._mounted = false;
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     */
    render() {
        const { showOverlay } = this.state;
        if (!showOverlay) {
            return null;
        }
        return (react_1.default.createElement(react_native_1.View, { pointerEvents: 'box-none', style: slidingviewstyles_1.default.sliderViewContainer },
            react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { onPress: this._onHide },
                react_1.default.createElement(react_native_1.View, { style: slidingviewstyles_1.default.sliderViewShadow })),
            react_1.default.createElement(react_native_1.Animated.View, { pointerEvents: 'box-none', style: this._getContentStyle() }, this.props.children)));
    }
    /**
     * Assembles a style array for the SlideView content.
     *
     * @private
     * @returns {Array<Object>}
     */
    _getContentStyle() {
        const style = {
            ...this.props.style,
            ...slidingviewstyles_1.default.sliderViewContent
        };
        const { positionOffset } = this.state;
        switch (this.props.position) {
            case 'bottom':
                Object.assign(style, {
                    bottom: -positionOffset,
                    left: 0,
                    right: 0,
                    top: positionOffset
                }, {
                    transform: [{ translateY: this.state.sliderAnimation }]
                });
                break;
            case 'left':
                Object.assign(style, {
                    bottom: 0,
                    left: -positionOffset,
                    right: positionOffset,
                    top: 0
                }, {
                    transform: [{ translateX: this.state.sliderAnimation }]
                });
                break;
        }
        return style;
    }
    /**
     * Callback to handle the hardware back button.
     *
     * @returns {boolean}
     */
    _onHardwareBackPress() {
        this._onHide();
        return true;
    }
    /**
     * Hides the slider.
     *
     * @private
     * @returns {void}
     */
    _onHide() {
        this._setShow(false)
            .then(() => {
            const { onHide } = this.props;
            onHide?.();
        });
    }
    /**
     * Shows/hides the slider menu.
     *
     * @param {boolean} show - If the slider view is to be made visible,
     * {@code true}; otherwise, {@code false}.
     * @private
     * @returns {Promise}
     */
    _setShow(show) {
        return new Promise(resolve => {
            if (!this._mounted) {
                resolve();
                return;
            }
            const { positionOffset } = this.state;
            const { position } = this.props;
            let toValue = positionOffset;
            if (position === 'bottom' || position === 'right') {
                toValue = -positionOffset;
            }
            react_native_1.Animated
                .timing(
            /* value */ this.state.sliderAnimation, 
            /* config */ {
                duration: 200,
                toValue: show ? toValue : 0,
                useNativeDriver: true
            })
                .start(({ finished }) => {
                finished && this._mounted && !show
                    && this.setState({ showOverlay: false }, () => {
                        this.forceUpdate();
                    });
                resolve();
            });
        });
    }
}
exports.default = SlidingView;

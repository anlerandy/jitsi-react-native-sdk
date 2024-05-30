"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
const SlidingView_1 = require("../../../react/components/native/SlidingView");
const actions_1 = require("../../actions");
const styles_1 = require("./styles");
/**
 * A component emulating Android's BottomSheet.
 */
class BottomSheet extends react_1.PureComponent {
    /**
     * Initializes a new instance.
     *
     * @param {Props} props - The React {@code Component} props to initialize
     * the new instance with.
     */
    constructor(props) {
        super(props);
        this._onCancel = this._onCancel.bind(this);
    }
    /**
     * Handles the cancel event, when the user dismissed the sheet. By default we close it.
     *
     * @returns {void}
     */
    _onCancel() {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
        else {
            this.props.dispatch((0, actions_1.hideSheet)());
        }
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { addScrollViewPadding, renderHeader, renderFooter, showSlidingView, style } = this.props;
        return (react_1.default.createElement(SlidingView_1.default, { onHide: this._onCancel, position: 'bottom', show: Boolean(showSlidingView) },
            react_1.default.createElement(react_native_1.View, { pointerEvents: 'box-none', style: styles_1.bottomSheetStyles.sheetContainer },
                react_1.default.createElement(react_native_1.View, { pointerEvents: 'box-none', style: styles_1.bottomSheetStyles.sheetAreaCover }),
                renderHeader?.(),
                react_1.default.createElement(react_native_1.SafeAreaView, { style: [
                        styles_1.bottomSheetStyles.sheetItemContainer,
                        renderHeader
                            ? styles_1.bottomSheetStyles.sheetHeader
                            : styles_1.bottomSheetStyles.sheet,
                        renderFooter && styles_1.bottomSheetStyles.sheetFooter,
                        style
                    ] },
                    react_1.default.createElement(react_native_1.ScrollView, { bounces: false, showsVerticalScrollIndicator: false, style: [
                            renderFooter && styles_1.bottomSheetStyles.sheet,
                            addScrollViewPadding && styles_1.bottomSheetStyles.scrollView
                        ] }, this.props.children),
                    renderFooter?.()))));
    }
}
/**
 * Default values for {@code BottomSheet} component's properties.
 *
 * @static
 */
BottomSheet.defaultProps = {
    addScrollViewPadding: true,
    showSlidingView: true
};
exports.default = (0, react_redux_1.connect)()(BottomSheet);

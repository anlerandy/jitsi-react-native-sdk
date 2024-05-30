"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../base/i18n/functions");
const actions_1 = require("../../../base/settings/actions");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const types_1 = require("../../../toolbox/types");
/**
 * Implements a React {@link Component} which displays a button for flipping the local viedo.
 *
 * @augments Component
 */
class FlipLocalVideoButton extends react_1.PureComponent {
    /**
     * Initializes a new {@code FlipLocalVideoButton} instance.
     *
     * @param {Object} props - The read-only React Component props with which
     * the new instance is to be initialized.
     */
    constructor(props) {
        super(props);
        // Bind event handlers so they are only bound once for every instance.
        this._onClick = this._onClick.bind(this);
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {null|ReactElement}
     */
    render() {
        const { className, t } = this.props;
        return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: t('videothumbnail.flip'), className: 'fliplink', id: 'flipLocalVideoButton', onClick: this._onClick, text: t('videothumbnail.flip'), textClassName: className }));
    }
    /**
     * Flips the local video.
     *
     * @private
     * @returns {void}
     */
    _onClick() {
        const { _localFlipX, dispatch, notifyClick, notifyMode, onClick } = this.props;
        notifyClick?.();
        if (notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY) {
            return;
        }
        onClick?.();
        dispatch((0, actions_1.updateSettings)({
            localFlipX: !_localFlipX
        }));
    }
}
/**
 * Maps (parts of) the Redux state to the associated {@code FlipLocalVideoButton}'s props.
 *
 * @param {Object} state - The Redux state.
 * @private
 * @returns {IProps}
 */
function _mapStateToProps(state) {
    const { localFlipX } = state['features/base/settings'];
    return {
        _localFlipX: Boolean(localFlipX)
    };
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(_mapStateToProps)(FlipLocalVideoButton));

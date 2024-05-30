"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../base/i18n/functions");
const actions_1 = require("../../../base/settings/actions");
const functions_2 = require("../../../base/settings/functions");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const types_1 = require("../../../toolbox/types");
/**
 * Implements a React {@link Component} which displays a button for hiding the local video.
 *
 * @augments Component
 */
class HideSelfViewVideoButton extends react_1.PureComponent {
    /**
     * Initializes a new {@code HideSelfViewVideoButton} instance.
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
        return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: t('videothumbnail.hideSelfView'), className: 'hideselflink', id: 'hideselfviewButton', onClick: this._onClick, text: t('videothumbnail.hideSelfView'), textClassName: className }));
    }
    /**
     * Hides the local video.
     *
     * @private
     * @returns {void}
     */
    _onClick() {
        const { disableSelfView, dispatch, notifyClick, notifyMode, onClick } = this.props;
        notifyClick?.();
        if (notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY) {
            return;
        }
        onClick?.();
        dispatch((0, actions_1.updateSettings)({
            disableSelfView: !disableSelfView
        }));
    }
}
/**
 * Maps (parts of) the Redux state to the associated {@code HideSelfViewVideoButton}'s props.
 *
 * @param {Object} state - The Redux state.
 * @private
 * @returns {IProps}
 */
function _mapStateToProps(state) {
    return {
        disableSelfView: Boolean((0, functions_2.getHideSelfView)(state))
    };
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(_mapStateToProps)(HideSelfViewVideoButton));

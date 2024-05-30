"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const actions_1 = require("../../../../base/dialog/actions");
const functions_1 = require("../../../../base/i18n/functions");
const AbstractLiveStreamButton_1 = require("../AbstractLiveStreamButton");
const StartLiveStreamDialog_1 = require("./StartLiveStreamDialog");
const StopLiveStreamDialog_1 = require("./StopLiveStreamDialog");
/**
 * Button for opening the live stream settings dialog.
 */
class LiveStreamButton extends AbstractLiveStreamButton_1.default {
    /**
     * Handles clicking / pressing the button.
     *
     * @override
     * @protected
     * @returns {void}
     */
    _onHandleClick() {
        const { _isLiveStreamRunning, dispatch } = this.props;
        dispatch((0, actions_1.openDialog)(_isLiveStreamRunning ? StopLiveStreamDialog_1.default : StartLiveStreamDialog_1.default));
    }
}
/**
 * Maps (parts of) the redux state to the associated props for the
 * {@code LiveStreamButton} component.
 *
 * @param {Object} state - The Redux state.
 * @param {IProps} ownProps - The own props of the Component.
 * @private
 * @returns {{
 *     _conference: Object,
 *     _isLiveStreamRunning: boolean,
 *     _disabled: boolean,
 *     visible: boolean
 * }}
 */
function _mapStateToProps(state, ownProps) {
    const abstractProps = (0, AbstractLiveStreamButton_1._mapStateToProps)(state, ownProps);
    const { toolbarButtons } = state['features/toolbox'];
    let { visible } = ownProps;
    if (typeof visible === 'undefined') {
        visible = Boolean(toolbarButtons?.includes('livestreaming') && abstractProps.visible);
    }
    return {
        ...abstractProps,
        visible
    };
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(_mapStateToProps)(LiveStreamButton));

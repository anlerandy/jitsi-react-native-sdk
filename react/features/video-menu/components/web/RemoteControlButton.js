"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REMOTE_CONTROL_MENU_STATES = void 0;
const react_1 = require("react");
const AnalyticsEvents_1 = require("../../../analytics/AnalyticsEvents");
const functions_1 = require("../../../analytics/functions");
const functions_2 = require("../../../base/i18n/functions");
const svg_1 = require("../../../base/icons/svg");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const types_1 = require("../../../toolbox/types");
// TODO: Move these enums into the store after further reactification of the
// non-react RemoteVideo component.
exports.REMOTE_CONTROL_MENU_STATES = {
    NOT_SUPPORTED: 0,
    NOT_STARTED: 1,
    REQUESTING: 2,
    STARTED: 3
};
/**
 * Implements a React {@link Component} which displays a button showing the
 * current state of remote control for a participant and can start or stop a
 * remote control session.
 *
 * @augments Component
 */
class RemoteControlButton extends react_1.Component {
    /**
     * Initializes a new {@code RemoteControlButton} instance.
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
        const { remoteControlState, t } = this.props;
        let disabled = false, icon;
        switch (remoteControlState) {
            case exports.REMOTE_CONTROL_MENU_STATES.NOT_STARTED:
                icon = svg_1.IconRemoteControlStart;
                break;
            case exports.REMOTE_CONTROL_MENU_STATES.REQUESTING:
                disabled = true;
                icon = svg_1.IconRemoteControlStart;
                break;
            case exports.REMOTE_CONTROL_MENU_STATES.STARTED:
                icon = svg_1.IconRemoteControlStop;
                break;
            case exports.REMOTE_CONTROL_MENU_STATES.NOT_SUPPORTED:
            // Intentionally fall through.
            default:
                return null;
        }
        return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: t('videothumbnail.remoteControl'), className: 'kicklink', disabled: disabled, icon: icon, onClick: this._onClick, text: t('videothumbnail.remoteControl') }));
    }
    /**
     * Sends analytics event for pressing the button and executes the passed
     * onClick handler.
     *
     * @private
     * @returns {void}
     */
    _onClick() {
        const { notifyClick, notifyMode, onClick, participantID, remoteControlState } = this.props;
        notifyClick?.();
        if (notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY) {
            return;
        }
        // TODO: What do we do in case the state is e.g. "requesting"?
        if (remoteControlState === exports.REMOTE_CONTROL_MENU_STATES.STARTED
            || remoteControlState === exports.REMOTE_CONTROL_MENU_STATES.NOT_STARTED) {
            const enable = remoteControlState === exports.REMOTE_CONTROL_MENU_STATES.NOT_STARTED;
            (0, functions_1.sendAnalytics)((0, AnalyticsEvents_1.createRemoteVideoMenuButtonEvent)('remote.control.button', {
                enable,
                'participant_id': participantID
            }));
        }
        onClick?.();
    }
}
exports.default = (0, functions_2.translate)(RemoteControlButton);

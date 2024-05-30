"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveConferenceButton = void 0;
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const AnalyticsEvents_1 = require("../../../analytics/AnalyticsEvents");
const functions_1 = require("../../../analytics/functions");
const actions_1 = require("../../../base/conference/actions");
const constants_web_1 = require("../../../base/ui/constants.web");
const HangupContextMenuItem_1 = require("./HangupContextMenuItem");
/**
 * Button to leave the conference.
 *
 * @param {Object} props - Component's props.
 * @returns {JSX.Element} - The leave conference button.
 */
const LeaveConferenceButton = (props) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const onLeaveConference = (0, react_1.useCallback)(() => {
        (0, functions_1.sendAnalytics)((0, AnalyticsEvents_1.createToolbarEvent)('hangup'));
        dispatch((0, actions_1.leaveConference)());
    }, [dispatch]);
    return (react_1.default.createElement(HangupContextMenuItem_1.HangupContextMenuItem, { accessibilityLabel: t('toolbar.accessibilityLabel.leaveConference'), buttonKey: props.buttonKey, buttonType: constants_web_1.BUTTON_TYPES.SECONDARY, label: t('toolbar.leaveConference'), notifyMode: props.notifyMode, onClick: onLeaveConference }));
};
exports.LeaveConferenceButton = LeaveConferenceButton;

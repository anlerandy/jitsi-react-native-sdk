"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveButton = void 0;
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const AnalyticsEvents_1 = require("../../../../../analytics/AnalyticsEvents");
const functions_1 = require("../../../../../analytics/functions");
const Button_1 = require("../../../../../base/ui/components/web/Button");
const constants_web_1 = require("../../../../../base/ui/constants.web");
const actions_1 = require("../../../../../breakout-rooms/actions");
const LeaveButton = ({ className }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const onLeave = (0, react_1.useCallback)(() => {
        (0, functions_1.sendAnalytics)((0, AnalyticsEvents_1.createBreakoutRoomsEvent)('leave'));
        dispatch((0, actions_1.moveToRoom)());
    }, [dispatch]);
    return (react_1.default.createElement(Button_1.default, { accessibilityLabel: t('breakoutRooms.actions.leaveBreakoutRoom'), className: className, fullWidth: true, labelKey: 'breakoutRooms.actions.leaveBreakoutRoom', onClick: onLeave, type: constants_web_1.BUTTON_TYPES.DESTRUCTIVE }));
};
exports.LeaveButton = LeaveButton;

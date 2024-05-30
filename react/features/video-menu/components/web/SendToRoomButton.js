"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const AnalyticsEvents_1 = require("../../../analytics/AnalyticsEvents");
const functions_1 = require("../../../analytics/functions");
const svg_1 = require("../../../base/icons/svg");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const actions_1 = require("../../../breakout-rooms/actions");
const types_1 = require("../../../toolbox/types");
const SendToRoomButton = ({ notifyClick, notifyMode, onClick, participantID, room }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const _onClick = (0, react_1.useCallback)(() => {
        notifyClick?.();
        if (notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY) {
            return;
        }
        onClick?.();
        (0, functions_1.sendAnalytics)((0, AnalyticsEvents_1.createBreakoutRoomsEvent)('send.participant.to.room'));
        dispatch((0, actions_1.sendParticipantToRoom)(participantID, room.id));
    }, [dispatch, notifyClick, notifyMode, onClick, participantID, room, functions_1.sendAnalytics]);
    const roomName = room.name || t('breakoutRooms.mainRoom');
    return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: roomName, icon: svg_1.IconRingGroup, onClick: _onClick, text: roomName }));
};
exports.default = SendToRoomButton;

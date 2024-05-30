"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomParticipantContextMenu = void 0;
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const Avatar_1 = require("../../../../../base/avatar/components/Avatar");
const functions_1 = require("../../../../../base/participants/functions");
const ContextMenu_1 = require("../../../../../base/ui/components/web/ContextMenu");
const ContextMenuItemGroup_1 = require("../../../../../base/ui/components/web/ContextMenuItemGroup");
const functions_2 = require("../../../../../breakout-rooms/functions");
const functions_web_1 = require("../../../../../toolbox/functions.web");
const types_1 = require("../../../../../toolbox/types");
const SendToRoomButton_1 = require("../../../../../video-menu/components/web/SendToRoomButton");
const constants_1 = require("../../../../../video-menu/constants");
const constants_2 = require("../../../../constants");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        text: {
            color: theme.palette.text02,
            padding: '10px 16px',
            height: '40px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box'
        }
    };
});
const RoomParticipantContextMenu = ({ entity, offsetTarget, onEnter, onLeave, onSelect }) => {
    const { classes: styles } = useStyles();
    const { t } = (0, react_i18next_1.useTranslation)();
    const isLocalModerator = (0, react_redux_1.useSelector)(functions_1.isLocalParticipantModerator);
    const lowerMenu = (0, react_1.useCallback)(() => onSelect(true), [onSelect]);
    const rooms = (0, react_redux_1.useSelector)(functions_2.getBreakoutRooms);
    const overflowDrawer = (0, react_redux_1.useSelector)(functions_web_1.showOverflowDrawer);
    const buttonsWithNotifyClick = (0, react_redux_1.useSelector)(functions_web_1.getParticipantMenuButtonsWithNotifyClick);
    const notifyClick = (0, react_1.useCallback)((buttonKey, participantId) => {
        const notifyMode = buttonsWithNotifyClick?.get(buttonKey);
        if (!notifyMode) {
            return;
        }
        APP.API.notifyParticipantMenuButtonClicked(buttonKey, participantId, notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY);
    }, [buttonsWithNotifyClick]);
    const breakoutRoomsButtons = (0, react_1.useMemo)(() => Object.values(rooms || {}).map((room) => {
        if (room.id !== entity?.room?.id) {
            return (react_1.default.createElement(SendToRoomButton_1.default, { key: room.id, 
                // eslint-disable-next-line react/jsx-no-bind
                notifyClick: () => notifyClick(constants_1.PARTICIPANT_MENU_BUTTONS.SEND_PARTICIPANT_TO_ROOM, entity?.jid), notifyMode: buttonsWithNotifyClick?.get(constants_1.PARTICIPANT_MENU_BUTTONS.SEND_PARTICIPANT_TO_ROOM), onClick: lowerMenu, participantID: entity?.jid ?? '', room: room }));
        }
        return null;
    })
        .filter(Boolean), [entity, rooms, buttonsWithNotifyClick]);
    return isLocalModerator ? (react_1.default.createElement(ContextMenu_1.default, { entity: entity, isDrawerOpen: Boolean(entity), offsetTarget: offsetTarget, onClick: lowerMenu, onDrawerClose: onSelect, onMouseEnter: onEnter, onMouseLeave: onLeave },
        overflowDrawer && entity?.jid && react_1.default.createElement(ContextMenuItemGroup_1.default, { actions: [{
                    accessibilityLabel: entity?.participantName,
                    customIcon: react_1.default.createElement(Avatar_1.default, { displayName: entity?.participantName, size: constants_2.AVATAR_SIZE }),
                    text: entity?.participantName
                }] }),
        react_1.default.createElement(ContextMenuItemGroup_1.default, null,
            react_1.default.createElement("div", { className: styles.text }, t('breakoutRooms.actions.sendToBreakoutRoom')),
            breakoutRoomsButtons))) : null;
};
exports.RoomParticipantContextMenu = RoomParticipantContextMenu;

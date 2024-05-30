"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const AnalyticsEvents_1 = require("../../../../../analytics/AnalyticsEvents");
const functions_1 = require("../../../../../analytics/functions");
const Button_1 = require("../../../../../base/ui/components/web/Button");
const actions_1 = require("../../../../../breakout-rooms/actions");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        button: {
            marginRight: theme.spacing(2)
        }
    };
});
const JoinActionButton = ({ room }) => {
    const { classes: styles } = useStyles();
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const onJoinRoom = (0, react_1.useCallback)(e => {
        e.stopPropagation();
        (0, functions_1.sendAnalytics)((0, AnalyticsEvents_1.createBreakoutRoomsEvent)('join'));
        dispatch((0, actions_1.moveToRoom)(room.jid));
    }, [dispatch, room]);
    return (react_1.default.createElement(Button_1.default, { accessibilityLabel: t('breakoutRooms.actions.join'), className: styles.button, labelKey: 'breakoutRooms.actions.join', onClick: onJoinRoom, size: 'small', testId: `join-room-${room.id}` }));
};
exports.default = JoinActionButton;

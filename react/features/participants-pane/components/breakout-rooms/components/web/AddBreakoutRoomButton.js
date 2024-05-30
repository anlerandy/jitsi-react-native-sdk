"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBreakoutRoomButton = void 0;
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const Button_1 = require("../../../../../base/ui/components/web/Button");
const constants_web_1 = require("../../../../../base/ui/constants.web");
const actions_1 = require("../../../../../breakout-rooms/actions");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        button: {
            marginTop: theme.spacing(3)
        }
    };
});
const AddBreakoutRoomButton = () => {
    const { classes } = useStyles();
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const onAdd = (0, react_1.useCallback)(() => dispatch((0, actions_1.createBreakoutRoom)()), [dispatch]);
    return (react_1.default.createElement(Button_1.default, { accessibilityLabel: t('breakoutRooms.actions.add'), className: classes.button, fullWidth: true, labelKey: 'breakoutRooms.actions.add', onClick: onAdd, type: constants_web_1.BUTTON_TYPES.SECONDARY }));
};
exports.AddBreakoutRoomButton = AddBreakoutRoomButton;

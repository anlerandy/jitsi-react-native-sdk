"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoAssignButton = void 0;
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const Button_1 = require("../../../../../base/ui/components/web/Button");
const constants_web_1 = require("../../../../../base/ui/constants.web");
const actions_1 = require("../../../../../breakout-rooms/actions");
const AutoAssignButton = ({ className }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const onAutoAssign = (0, react_1.useCallback)(() => {
        dispatch((0, actions_1.autoAssignToBreakoutRooms)());
    }, [dispatch]);
    return (react_1.default.createElement(Button_1.default, { accessibilityLabel: t('breakoutRooms.actions.autoAssign'), className: className, fullWidth: true, labelKey: 'breakoutRooms.actions.autoAssign', onClick: onAutoAssign, type: constants_web_1.BUTTON_TYPES.TERTIARY }));
};
exports.AutoAssignButton = AutoAssignButton;

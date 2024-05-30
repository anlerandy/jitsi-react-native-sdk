"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const svg_1 = require("../../../../../base/icons/svg");
const Button_1 = require("../../../../../base/ui/components/web/Button");
const RoomActionEllipsis = ({ onClick }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (react_1.default.createElement(Button_1.default, { accessibilityLabel: t('breakoutRooms.actions.more'), icon: svg_1.IconDotsHorizontal, onClick: onClick, size: 'small' }));
};
exports.default = RoomActionEllipsis;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const CustomOptionButton = ({ icon: iconSrc, onClick, text }) => {
    const icon = (0, react_1.useCallback)(props => (react_1.default.createElement("img", { src: iconSrc, ...props })), [iconSrc]);
    return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: text, icon: icon, onClick: onClick, text: text }));
};
exports.default = CustomOptionButton;

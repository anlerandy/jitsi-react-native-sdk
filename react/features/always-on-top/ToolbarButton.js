"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Icon_1 = require("../base/icons/components/Icon");
const ToolbarButton = ({ accessibilityLabel, customClass, disabled = false, onClick, icon, toggled = false }) => {
    const onKeyPress = (0, react_1.useCallback)(event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick();
        }
    }, [onClick]);
    return (react_1.default.createElement("div", { "aria-disabled": disabled, "aria-label": accessibilityLabel, "aria-pressed": toggled, className: `toolbox-button ${disabled ? ' disabled' : ''}`, onClick: disabled ? undefined : onClick, onKeyPress: disabled ? undefined : onKeyPress, role: 'button', tabIndex: 0 },
        react_1.default.createElement("div", { className: `toolbox-icon ${disabled ? 'disabled' : ''} ${customClass ?? ''}` },
            react_1.default.createElement(Icon_1.default, { src: icon }))));
};
exports.default = ToolbarButton;

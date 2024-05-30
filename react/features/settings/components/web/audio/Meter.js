"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Icon_1 = require("../../../../base/icons/components/Icon");
const svg_1 = require("../../../../base/icons/svg");
/**
 * React {@code Component} representing an audio level meter.
 *
 * @returns { ReactElement}
 */
function default_1({ className, isDisabled, level }) {
    let ownClassName;
    if (level > -1) {
        ownClassName = `metr metr-l-${level}`;
    }
    else {
        ownClassName = `metr ${isDisabled ? 'metr--disabled' : ''}`;
    }
    return (react_1.default.createElement(Icon_1.default, { className: `${ownClassName} ${className}`, size: 12, src: svg_1.IconMeter }));
}
exports.default = default_1;

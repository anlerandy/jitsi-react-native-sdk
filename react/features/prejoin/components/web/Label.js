"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 *  Label for the dialogs.
 *
 *  @returns {ReactElement}
 */
function Label({ children, className, number, onClick }) {
    const containerClass = className
        ? `prejoin-dialog-label ${className}`
        : 'prejoin-dialog-label';
    return (react_1.default.createElement("div", { className: containerClass, onClick: onClick },
        number && react_1.default.createElement("div", { className: 'prejoin-dialog-label-num' }, number),
        react_1.default.createElement("span", null, children)));
}
exports.default = Label;

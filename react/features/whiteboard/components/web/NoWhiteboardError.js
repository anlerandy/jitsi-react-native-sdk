"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const NoWhiteboardError = ({ className }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (react_1.default.createElement("div", { className: className }, t('info.noWhiteboard')));
};
exports.default = NoWhiteboardError;

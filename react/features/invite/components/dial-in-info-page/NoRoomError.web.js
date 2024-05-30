"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const NoRoomError = ({ className }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement("div", null, t('info.noNumbers')),
        react_1.default.createElement("div", null, t('info.noRoom'))));
};
exports.default = NoRoomError;

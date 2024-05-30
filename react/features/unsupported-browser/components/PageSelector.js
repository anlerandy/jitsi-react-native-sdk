"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../jaas/functions");
const JaasUnsupportedDesktopBrowser_1 = require("./JaasUnsupportedDesktopBrowser");
const UnsupportedDesktopBrowser_1 = require("./UnsupportedDesktopBrowser");
const PageSelector = () => {
    const isJaas = (0, react_redux_1.useSelector)(functions_1.isVpaasMeeting);
    if (isJaas) {
        return react_1.default.createElement(JaasUnsupportedDesktopBrowser_1.default, null);
    }
    return react_1.default.createElement(UnsupportedDesktopBrowser_1.default, null);
};
exports.default = PageSelector;

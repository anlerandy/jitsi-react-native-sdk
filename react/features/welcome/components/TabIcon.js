"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Icon_1 = require("../../base/icons/components/Icon");
const BaseTheme_1 = require("../../base/ui/components/BaseTheme");
const constants_1 = require("../constants");
const TabIcon = ({ focused, src, style }) => (react_1.default.createElement(Icon_1.default, { color: focused ? BaseTheme_1.default.palette.icon01 : constants_1.INACTIVE_TAB_COLOR, size: 24, src: src, style: style }));
exports.default = TabIcon;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const LocalVideoMenuTriggerButton_1 = require("../../../video-menu/components/web/LocalVideoMenuTriggerButton");
const RemoteVideoMenuTriggerButton_1 = require("../../../video-menu/components/web/RemoteVideoMenuTriggerButton");
// eslint-disable-next-line no-confusing-arrow
const VideoMenuTriggerButton = ({ hidePopover, local, participantId = '', popoverVisible, showPopover, thumbnailType, visible }) => local
    ? (react_1.default.createElement("span", { id: 'localvideomenu' },
        react_1.default.createElement(LocalVideoMenuTriggerButton_1.default, { buttonVisible: visible, hidePopover: hidePopover, popoverVisible: popoverVisible, showPopover: showPopover, thumbnailType: thumbnailType })))
    : (react_1.default.createElement("span", { id: 'remotevideomenu' },
        react_1.default.createElement(RemoteVideoMenuTriggerButton_1.default, { buttonVisible: visible, hidePopover: hidePopover, participantID: participantId, popoverVisible: popoverVisible, showPopover: showPopover, thumbnailType: thumbnailType })));
exports.default = VideoMenuTriggerButton;

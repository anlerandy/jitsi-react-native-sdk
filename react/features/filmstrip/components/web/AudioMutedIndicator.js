"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const svg_1 = require("../../../base/icons/svg");
const BaseIndicator_1 = require("../../../base/react/components/web/BaseIndicator");
/**
 * React {@code Component} for showing an audio muted icon with a tooltip.
 *
 * @returns {Component}
 */
const AudioMutedIndicator = ({ tooltipPosition }) => (react_1.default.createElement(BaseIndicator_1.default, { icon: svg_1.IconMicSlash, iconId: 'mic-disabled', iconSize: 16, id: 'audioMuted', tooltipKey: 'videothumbnail.mute', tooltipPosition: tooltipPosition }));
exports.default = AudioMutedIndicator;

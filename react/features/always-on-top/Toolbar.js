"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const AudioMuteButton_1 = require("./AudioMuteButton");
const HangupButton_1 = require("./HangupButton");
const VideoMuteButton_1 = require("./VideoMuteButton");
/**
 * Represents the toolbar in the Always On Top window.
 *
 * @augments Component
 */
class Toolbar extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { className = '', onMouseOut, onMouseOver } = this.props;
        return (react_1.default.createElement("div", { className: `toolbox-content-items always-on-top-toolbox ${className}`, onMouseOut: onMouseOut, onMouseOver: onMouseOver },
            react_1.default.createElement(AudioMuteButton_1.default, null),
            react_1.default.createElement(VideoMuteButton_1.default, null),
            react_1.default.createElement(HangupButton_1.default, { customClass: 'hangup-button' })));
    }
}
exports.default = Toolbar;

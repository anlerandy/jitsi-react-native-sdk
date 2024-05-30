"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Dialog_1 = require("../../base/ui/components/web/Dialog");
const VideoQualitySlider_web_1 = require("./VideoQualitySlider.web");
/**
 * Implements a React {@link Component} which displays the component
 * {@code VideoQualitySlider} in a dialog.
 *
 * @augments Component
 */
class VideoQualityDialog extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (react_1.default.createElement(Dialog_1.default, { cancel: { hidden: true }, ok: { hidden: true }, titleKey: 'videoStatus.performanceSettings' },
            react_1.default.createElement(VideoQualitySlider_web_1.default, null)));
    }
}
exports.default = VideoQualityDialog;

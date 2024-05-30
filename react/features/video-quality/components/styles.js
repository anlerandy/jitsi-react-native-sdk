"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUD_LABEL_COLOR = void 0;
const ColorPalette_1 = require("../../base/styles/components/styles/ColorPalette");
const functions_any_1 = require("../../base/styles/functions.any");
const BaseTheme_native_1 = require("../../base/ui/components/BaseTheme.native");
exports.AUD_LABEL_COLOR = ColorPalette_1.ColorPalette.green;
/**
 * The styles of the React {@code Components} of the feature video-quality.
 */
exports.default = (0, functions_any_1.createStyleSheet)({
    /**
     * Style for the audio-only indicator.
     */
    indicatorAudioOnly: {
        backgroundColor: exports.AUD_LABEL_COLOR,
        borderRadius: BaseTheme_native_1.default.shape.borderRadius,
        height: 32
    }
});

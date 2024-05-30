"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const svg_1 = require("../../base/icons/svg");
const AbstractButton_1 = require("../../base/toolbox/components/AbstractButton");
/**
 * Implementation of a button for opening speaker stats dialog.
 */
class AbstractSpeakerStatsButton extends AbstractButton_1.default {
    constructor() {
        super(...arguments);
        this.accessibilityLabel = 'toolbar.accessibilityLabel.speakerStats';
        this.icon = svg_1.IconConnection;
        this.label = 'toolbar.speakerStats';
        this.tooltip = 'toolbar.speakerStats';
    }
}
exports.default = AbstractSpeakerStatsButton;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const functions_1 = require("../../../base/i18n/functions");
const AbstractSuspendedOverlay_1 = require("./AbstractSuspendedOverlay");
const OverlayFrame_1 = require("./OverlayFrame");
const ReloadButton_1 = require("./ReloadButton");
/**
 * Implements a React Component for suspended overlay. Shown when a suspend is
 * detected.
 */
class SuspendedOverlay extends AbstractSuspendedOverlay_1.default {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { t } = this.props;
        return (react_1.default.createElement(OverlayFrame_1.default, null,
            react_1.default.createElement("div", { className: 'inlay' },
                react_1.default.createElement("span", { className: 'inlay__icon icon-microphone' }),
                react_1.default.createElement("span", { className: 'inlay__icon icon-camera' }),
                react_1.default.createElement("h3", { className: 'inlay__title' }, t('suspendedoverlay.title')),
                react_1.default.createElement(ReloadButton_1.default, { textKey: 'suspendedoverlay.rejoinKeyTitle' }))));
    }
}
exports.default = (0, functions_1.translate)(SuspendedOverlay);

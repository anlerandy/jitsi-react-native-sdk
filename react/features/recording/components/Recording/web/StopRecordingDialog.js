"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../../base/i18n/functions");
const Dialog_1 = require("../../../../base/ui/components/web/Dialog");
const actions_1 = require("../../../../screenshot-capture/actions");
const AbstractStopRecordingDialog_1 = require("../AbstractStopRecordingDialog");
/**
 * React Component for getting confirmation to stop a file recording session in
 * progress.
 *
 * @augments Component
 */
class StopRecordingDialog extends AbstractStopRecordingDialog_1.default {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { t, localRecordingVideoStop } = this.props;
        return (react_1.default.createElement(Dialog_1.default, { ok: { translationKey: 'dialog.confirm' }, onSubmit: this._onSubmit, titleKey: 'dialog.recording' }, t(localRecordingVideoStop ? 'recording.localRecordingVideoStop' : 'dialog.stopRecordingWarning')));
    }
    /**
     * Toggles screenshot capture.
     *
     * @returns {void}
     */
    _toggleScreenshotCapture() {
        this.props.dispatch((0, actions_1.toggleScreenshotCaptureSummary)(false));
    }
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(AbstractStopRecordingDialog_1._mapStateToProps)(StopRecordingDialog));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../../base/i18n/functions");
const Dialog_1 = require("../../../../base/ui/components/web/Dialog");
const actions_1 = require("../../../../screenshot-capture/actions");
const functions_2 = require("../../../../screenshot-capture/functions");
const constants_1 = require("../../../constants");
const AbstractStartRecordingDialog_1 = require("../AbstractStartRecordingDialog");
const StartRecordingDialogContent_1 = require("./StartRecordingDialogContent");
/**
 * React Component for getting confirmation to start a file recording session in
 * progress.
 *
 * @augments Component
 */
class StartRecordingDialog extends AbstractStartRecordingDialog_1.default {
    /**
     * Disables start recording button.
     *
     * @returns {boolean}
     */
    isStartRecordingDisabled() {
        const { isTokenValid, selectedRecordingService, shouldRecordAudioAndVideo, shouldRecordTranscription } = this.state;
        if (!shouldRecordAudioAndVideo && !shouldRecordTranscription) {
            return true;
        }
        // Start button is disabled if recording service is only shown;
        // When validating dropbox token, if that is not enabled, we either always
        // show the start button or, if just dropbox is enabled, start button
        // is available when there is token.
        if (selectedRecordingService === constants_1.RECORDING_TYPES.JITSI_REC_SERVICE) {
            return false;
        }
        else if (selectedRecordingService === constants_1.RECORDING_TYPES.DROPBOX) {
            return !isTokenValid;
        }
        else if (selectedRecordingService === constants_1.RECORDING_TYPES.LOCAL) {
            return false;
        }
        return true;
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     */
    render() {
        const { isTokenValid, isValidating, localRecordingOnlySelf, selectedRecordingService, sharingEnabled, shouldRecordAudioAndVideo, shouldRecordTranscription, spaceLeft, userName } = this.state;
        const { _fileRecordingsServiceEnabled, _fileRecordingsServiceSharingEnabled } = this.props;
        return (react_1.default.createElement(Dialog_1.default, { ok: {
                translationKey: 'dialog.startRecording',
                disabled: this.isStartRecordingDisabled()
            }, onSubmit: this._onSubmit, titleKey: 'dialog.startRecording' },
            react_1.default.createElement(StartRecordingDialogContent_1.default, { fileRecordingsServiceEnabled: _fileRecordingsServiceEnabled, fileRecordingsServiceSharingEnabled: _fileRecordingsServiceSharingEnabled, integrationsEnabled: this._areIntegrationsEnabled(), isTokenValid: isTokenValid, isValidating: isValidating, localRecordingOnlySelf: localRecordingOnlySelf, onChange: this._onSelectedRecordingServiceChanged, onLocalRecordingSelfChange: this._onLocalRecordingSelfChange, onRecordAudioAndVideoChange: this._onRecordAudioAndVideoChange, onSharingSettingChanged: this._onSharingSettingChanged, onTranscriptionChange: this._onTranscriptionChange, selectedRecordingService: selectedRecordingService, sharingSetting: sharingEnabled, shouldRecordAudioAndVideo: shouldRecordAudioAndVideo, shouldRecordTranscription: shouldRecordTranscription, spaceLeft: spaceLeft, userName: userName })));
    }
    /**
     * Toggles screenshot capture feature.
     *
     * @returns {void}
     */
    _toggleScreenshotCapture() {
        const { dispatch, _screenshotCaptureEnabled } = this.props;
        if (_screenshotCaptureEnabled) {
            dispatch((0, actions_1.toggleScreenshotCaptureSummary)(true));
        }
    }
}
/**
 * Maps redux state to component props.
 *
 * @param {Object} state - Redux state.
 * @param {any} ownProps - Component's own props.
 * @returns {Object}
 */
function mapStateToProps(state, ownProps) {
    return {
        ...(0, AbstractStartRecordingDialog_1.mapStateToProps)(state, ownProps),
        _screenshotCaptureEnabled: (0, functions_2.isScreenshotCaptureEnabled)(state, true, false)
    };
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(mapStateToProps)(StartRecordingDialog));

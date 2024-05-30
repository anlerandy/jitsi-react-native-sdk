"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._mapStateToProps = void 0;
const react_redux_1 = require("react-redux");
const actions_1 = require("../../../../base/dialog/actions");
const functions_1 = require("../../../../base/i18n/functions");
const AbstractRecordButton_1 = require("../AbstractRecordButton");
const StartRecordingDialog_1 = require("./StartRecordingDialog");
const StopRecordingDialog_1 = require("./StopRecordingDialog");
/**
 * Button for opening a dialog where a recording session can be started.
 */
class RecordingButton extends AbstractRecordButton_1.default {
    /**
     * Handles clicking / pressing the button.
     *
     * @override
     * @protected
     * @returns {void}
     */
    _onHandleClick() {
        const { _isRecordingRunning, dispatch } = this.props;
        dispatch((0, actions_1.openDialog)(_isRecordingRunning ? StopRecordingDialog_1.default : StartRecordingDialog_1.default));
    }
}
/**
 * Maps (parts of) the redux state to the associated props for the
 * {@code RecordButton} component.
 *
 * @param {Object} state - The Redux state.
 * @private
 * @returns {{
 *     _fileRecordingsDisabledTooltipKey: ?string,
 *     _isRecordingRunning: boolean,
 *     _disabled: boolean,
 *     visible: boolean
 * }}
 */
function _mapStateToProps(state) {
    const abstractProps = (0, AbstractRecordButton_1._mapStateToProps)(state);
    const { toolbarButtons } = state['features/toolbox'];
    const visible = Boolean(toolbarButtons?.includes('recording') && abstractProps.visible);
    return {
        ...abstractProps,
        visible
    };
}
exports._mapStateToProps = _mapStateToProps;
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(_mapStateToProps)(RecordingButton));

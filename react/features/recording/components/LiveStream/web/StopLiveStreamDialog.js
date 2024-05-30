"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../../base/i18n/functions");
const Dialog_1 = require("../../../../base/ui/components/web/Dialog");
const AbstractStopLiveStreamDialog_1 = require("../AbstractStopLiveStreamDialog");
/**
 * A React Component for confirming the participant wishes to stop the currently
 * active live stream of the conference.
 *
 * @augments Component
 */
class StopLiveStreamDialog extends AbstractStopLiveStreamDialog_1.default {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (react_1.default.createElement(Dialog_1.default, { ok: { translationKey: 'dialog.stopLiveStreaming' }, onSubmit: this._onSubmit, titleKey: 'dialog.liveStreaming' }, this.props.t('dialog.stopStreamingWarning')));
    }
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(AbstractStopLiveStreamDialog_1._mapStateToProps)(StopLiveStreamDialog));

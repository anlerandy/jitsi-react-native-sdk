"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../base/i18n/functions");
const Dialog_1 = require("../../../base/ui/components/web/Dialog");
const AbstractMuteRemoteParticipantsVideoDialog_1 = require("../AbstractMuteRemoteParticipantsVideoDialog");
/**
 * A React Component with the contents for a dialog that asks for confirmation
 * from the user before disabling a remote participants camera.
 *
 * @augments Component
 */
class MuteRemoteParticipantsVideoDialog extends AbstractMuteRemoteParticipantsVideoDialog_1.default {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (react_1.default.createElement(Dialog_1.default, { ok: { translationKey: 'dialog.muteParticipantsVideoButton' }, onSubmit: this._onSubmit, titleKey: 'dialog.muteParticipantsVideoTitle' },
            react_1.default.createElement("div", null, this.props.t(this.props.isVideoModerationOn
                ? 'dialog.muteParticipantsVideoBodyModerationOn'
                : 'dialog.muteParticipantsVideoBody'))));
    }
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(AbstractMuteRemoteParticipantsVideoDialog_1.abstractMapStateToProps)(MuteRemoteParticipantsVideoDialog));

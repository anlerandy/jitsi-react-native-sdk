"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../base/i18n/functions");
const Dialog_1 = require("../../../base/ui/components/web/Dialog");
const Switch_1 = require("../../../base/ui/components/web/Switch");
const AbstractMuteEveryonesVideoDialog_1 = require("../AbstractMuteEveryonesVideoDialog");
/**
 * A React Component with the contents for a dialog that asks for confirmation
 * from the user before disabling all remote participants cameras.
 *
 * @augments AbstractMuteEveryonesVideoDialog
 */
class MuteEveryonesVideoDialog extends AbstractMuteEveryonesVideoDialog_1.default {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (react_1.default.createElement(Dialog_1.default, { ok: { translationKey: 'dialog.muteParticipantsVideoButton' }, onSubmit: this._onSubmit, title: this.props.title },
            react_1.default.createElement("div", { className: 'mute-dialog' },
                this.state.content,
                this.props.isModerationSupported && this.props.exclude.length === 0 && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: 'separator-line' }),
                    react_1.default.createElement("div", { className: 'control-row' },
                        react_1.default.createElement("label", { htmlFor: 'moderation-switch' }, this.props.t('dialog.moderationVideoLabel')),
                        react_1.default.createElement(Switch_1.default, { checked: !this.state.moderationEnabled, id: 'moderation-switch', onChange: this._onToggleModeration })))))));
    }
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(AbstractMuteEveryonesVideoDialog_1.abstractMapStateToProps)(MuteEveryonesVideoDialog));

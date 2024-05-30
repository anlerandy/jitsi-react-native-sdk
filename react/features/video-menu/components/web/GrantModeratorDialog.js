"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../base/i18n/functions");
const Dialog_1 = require("../../../base/ui/components/web/Dialog");
const AbstractGrantModeratorDialog_1 = require("../AbstractGrantModeratorDialog");
/**
 * Dialog to confirm a grant moderator action.
 */
class GrantModeratorDialog extends AbstractGrantModeratorDialog_1.default {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (react_1.default.createElement(Dialog_1.default, { ok: { translationKey: 'dialog.Yes' }, onSubmit: this._onSubmit, titleKey: 'dialog.grantModeratorTitle' },
            react_1.default.createElement("div", null, this.props.t('dialog.grantModeratorDialog', { participantName: this.props.participantName }))));
    }
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(AbstractGrantModeratorDialog_1.abstractMapStateToProps)(GrantModeratorDialog));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../../base/i18n/functions");
const actions_1 = require("../../../actions");
const AbstractSecurityDialogButton_1 = require("../AbstractSecurityDialogButton");
/**
 * Implements an {@link AbstractSecurityDialogButton} to open the security dialog.
 */
class SecurityDialogButton extends AbstractSecurityDialogButton_1.default {
    /**
     * Opens / closes the security dialog.
     *
     * @private
     * @returns {void}
     */
    _handleClickSecurityButton() {
        const { dispatch } = this.props;
        dispatch((0, actions_1.toggleSecurityDialog)());
    }
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(AbstractSecurityDialogButton_1._mapStateToProps)(SecurityDialogButton));

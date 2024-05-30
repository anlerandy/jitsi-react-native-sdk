"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../base/i18n/functions");
const Dialog_1 = require("../../../base/ui/components/web/Dialog");
const actions_web_1 = require("../../actions.web");
/**
 * Authentication message dialog for host confirmation.
 *
 * @returns {React$Element<any>}
 */
class WaitForOwnerDialog extends react_1.PureComponent {
    /**
     * Instantiates a new component.
     *
     * @param {Object} props - The read-only properties with which the new
     * instance is to be initialized.
     */
    constructor(props) {
        super(props);
        this._onCancelWaitForOwner = this._onCancelWaitForOwner.bind(this);
        this._onIAmHost = this._onIAmHost.bind(this);
    }
    /**
     * Called when the cancel button is clicked.
     *
     * @private
     * @returns {void}
     */
    _onCancelWaitForOwner() {
        const { dispatch } = this.props;
        dispatch((0, actions_web_1.cancelWaitForOwner)());
    }
    /**
     * Called when the OK button is clicked.
     *
     * @private
     * @returns {void}
     */
    _onIAmHost() {
        this.props.dispatch((0, actions_web_1.login)());
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     */
    render() {
        const { t } = this.props;
        return (react_1.default.createElement(Dialog_1.default, { cancel: { translationKey: this.props._alternativeCancelText ? 'dialog.WaitingForHostButton' : 'dialog.Cancel' }, disableBackdropClose: true, hideCloseButton: true, ok: this.props._hideLoginButton ? { hidden: true,
                disabled: true } : { translationKey: 'dialog.IamHost' }, onCancel: this._onCancelWaitForOwner, onSubmit: this._onIAmHost, titleKey: t('dialog.WaitingForHostTitle') },
            react_1.default.createElement("span", null, this.props._hideLoginButton ? t('dialog.WaitForHostNoAuthMsg') : t('dialog.WaitForHostMsg'))));
    }
}
/**
 * Maps (parts of) the redux state to the associated
 * {@code WaitForOwnerDialog}'s props.
 *
 * @param {Object} state - The redux state.
 * @private
 * @returns {IProps}
 */
function mapStateToProps(state) {
    const { membersOnly, lobbyWaitingForHost } = state['features/base/conference'];
    const { hideLoginButton } = state['features/base/config'];
    return {
        _alternativeCancelText: membersOnly && lobbyWaitingForHost,
        _hideLoginButton: hideLoginButton
    };
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(mapStateToProps)(WaitForOwnerDialog));

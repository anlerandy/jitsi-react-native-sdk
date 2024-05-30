"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Input_1 = require("../../../../base/ui/components/web/Input");
const constants_1 = require("../../../../room-lock/constants");
/**
 * React {@code Component} for displaying and editing the conference password.
 *
 * @returns {ReactElement}
 */
function PasswordForm({ editEnabled, locked, onSubmit, password, passwordNumberOfDigits, visible }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [enteredPassword, setEnteredPassword] = (0, react_1.useState)('');
    const onKeyPress = (0, react_1.useCallback)(event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            onSubmit(enteredPassword);
        }
    }, [onSubmit, enteredPassword]);
    if (!editEnabled && enteredPassword && enteredPassword !== '') {
        setEnteredPassword('');
    }
    const placeHolderText = passwordNumberOfDigits ? t('passwordDigitsOnly', { number: passwordNumberOfDigits }) : t('dialog.password');
    return (react_1.default.createElement("div", { className: 'info-password' },
        locked && react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("span", { className: 'info-label' }, t('info.password')),
            react_1.default.createElement("span", { className: 'spacer' }, "\u00A0"),
            react_1.default.createElement("span", { className: 'info-password-field info-value' }, locked === constants_1.LOCKED_LOCALLY ? (react_1.default.createElement("div", { className: 'info-password-local' }, visible ? password : '******')) : (react_1.default.createElement("div", { className: 'info-password-remote' }, t('passwordSetRemotely'))))),
        editEnabled && react_1.default.createElement("div", { className: 'info-password-form' },
            react_1.default.createElement(Input_1.default, { accessibilityLabel: t('info.addPassword'), autoFocus: true, id: 'info-password-input', maxLength: passwordNumberOfDigits, mode: passwordNumberOfDigits ? 'numeric' : undefined, onChange: setEnteredPassword, onKeyPress: onKeyPress, placeholder: placeHolderText, type: 'password', value: enteredPassword }))));
}
exports.default = PasswordForm;

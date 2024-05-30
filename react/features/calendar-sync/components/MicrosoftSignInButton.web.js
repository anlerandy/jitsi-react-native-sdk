"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const functions_1 = require("../../base/i18n/functions");
/**
 * A React Component showing a button to sign in with Microsoft.
 *
 * @augments Component
 */
class MicrosoftSignInButton extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (react_1.default.createElement("div", { className: 'microsoft-sign-in', onClick: this.props.onClick },
            react_1.default.createElement("img", { alt: this.props.t('welcomepage.logo.microsoftLogo'), className: 'microsoft-logo', src: 'images/microsoftLogo.svg' }),
            react_1.default.createElement("div", { className: 'microsoft-cta' }, this.props.text)));
    }
}
exports.default = (0, functions_1.translate)(MicrosoftSignInButton);

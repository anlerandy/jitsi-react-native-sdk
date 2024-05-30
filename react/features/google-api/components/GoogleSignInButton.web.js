"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const functions_1 = require("../../base/i18n/functions");
/**
 * A React Component showing a button to sign in with Google.
 *
 * @augments Component
 */
class GoogleSignInButton extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { t } = this.props;
        return (react_1.default.createElement("div", { className: 'google-sign-in', onClick: this.props.onClick },
            react_1.default.createElement("img", { alt: t('welcomepage.logo.googleLogo'), className: 'google-logo', src: 'images/googleLogo.svg' }),
            react_1.default.createElement("div", { className: 'google-cta' }, t(this.props.signedIn
                ? 'liveStreaming.signOut'
                : 'liveStreaming.signIn'))));
    }
}
exports.default = (0, functions_1.translate)(GoogleSignInButton);

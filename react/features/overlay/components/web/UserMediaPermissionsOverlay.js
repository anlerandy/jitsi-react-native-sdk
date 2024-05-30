"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../base/i18n/functions");
const AbstractUserMediaPermissionsOverlay_1 = require("./AbstractUserMediaPermissionsOverlay");
const OverlayFrame_1 = require("./OverlayFrame");
/**
 * Implements a React Component for overlay with guidance how to proceed with
 * gUM prompt.
 */
class UserMediaPermissionsOverlay extends AbstractUserMediaPermissionsOverlay_1.default {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { _premeetingBackground, browser, t } = this.props;
        const style = _premeetingBackground ? {
            background: _premeetingBackground,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        } : {};
        return (react_1.default.createElement(OverlayFrame_1.default, { style: style },
            react_1.default.createElement("div", { className: 'inlay' },
                react_1.default.createElement("span", { className: 'inlay__icon icon-microphone' }),
                react_1.default.createElement("span", { className: 'inlay__icon icon-camera' }),
                react_1.default.createElement("h3", { "aria-label": t('startupoverlay.genericTitle'), className: 'inlay__title', role: 'alert' }, t('startupoverlay.genericTitle')),
                react_1.default.createElement("span", { className: 'inlay__text', role: 'alert' }, (0, functions_1.translateToHTML)(t, `userMedia.${browser}GrantPermissions`))),
            react_1.default.createElement("div", { className: 'policy overlay__policy' },
                react_1.default.createElement("p", { className: 'policy__text', role: 'alert' }, (0, functions_1.translateToHTML)(t, 'startupoverlay.policyText')),
                this._renderPolicyLogo())));
    }
    /**
     * Renders the policy logo.
     *
     * @private
     * @returns {ReactElement|null}
     */
    _renderPolicyLogo() {
        const policyLogoSrc = interfaceConfig.POLICY_LOGO;
        if (policyLogoSrc) {
            return (react_1.default.createElement("div", { className: 'policy__logo' },
                react_1.default.createElement("img", { alt: this.props.t('welcomepage.logo.policyLogo'), src: policyLogoSrc })));
        }
        return null;
    }
}
/**
 * Maps (parts of) the redux state to the React {@code Component} props.
 *
 * @param {Object} state - The redux state.
 * @param {Object} ownProps - The props passed to the component.
 * @returns {Object}
 */
function mapStateToProps(state) {
    const { premeetingBackground } = state['features/dynamic-branding'];
    return {
        ...(0, AbstractUserMediaPermissionsOverlay_1.abstractMapStateToProps)(state),
        _premeetingBackground: premeetingBackground
    };
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(mapStateToProps)(UserMediaPermissionsOverlay));

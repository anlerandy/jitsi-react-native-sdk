"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../base/i18n/functions");
const AbstractPageReloadOverlay_1 = require("./AbstractPageReloadOverlay");
const OverlayFrame_1 = require("./OverlayFrame");
/**
 * Implements a React Component for page reload overlay. Shown before the
 * conference is reloaded. Shows a warning message and counts down towards the
 * reload.
 */
class PageReloadOverlay extends AbstractPageReloadOverlay_1.default {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { isNetworkFailure, t } = this.props;
        const { message, timeLeft, title } = this.state;
        return (react_1.default.createElement(OverlayFrame_1.default, { isLightOverlay: isNetworkFailure },
            react_1.default.createElement("div", { "aria-describedby": 'reload_overlay_text', "aria-labelledby": 'reload_overlay_title', className: 'inlay', role: 'dialog' },
                react_1.default.createElement("span", { className: 'reload_overlay_title', id: 'reload_overlay_title', role: 'heading' }, t(title)),
                react_1.default.createElement("span", { className: 'reload_overlay_text', id: 'reload_overlay_text' }, t(message, { seconds: timeLeft })),
                this._renderProgressBar(),
                this._renderButton())));
    }
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(AbstractPageReloadOverlay_1.abstractMapStateToProps)(PageReloadOverlay));

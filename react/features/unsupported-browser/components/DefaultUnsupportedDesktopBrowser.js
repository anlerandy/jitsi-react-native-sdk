"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * React component representing unsupported browser page.
 *
 * @class DefaultUnsupportedDesktopBrowser
 */
class DefaultUnsupportedDesktopBrowser extends react_1.Component {
    /**
     * Redirects to the static recommended browsers page that is also used for IE.
     *
     * @returns {void}
     */
    componentDidMount() {
        window.location.pathname = 'static/recommendedBrowsers.html';
    }
    /**
     * Renders the component.
     *
     * @returns {ReactElement}
     */
    render() {
        return (react_1.default.createElement("div", null));
    }
}
exports.default = DefaultUnsupportedDesktopBrowser;

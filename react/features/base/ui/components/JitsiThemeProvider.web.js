"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@mui/material/styles");
const React = require("react");
const react_redux_1 = require("react-redux");
const BaseTheme_web_1 = require("./BaseTheme.web");
/**
 * The theme provider for the web app.
 *
 * @param {Object} props - The props of the component.
 * @returns {React.ReactNode}
 */
function JitsiThemeProvider(props) {
    return (React.createElement(styles_1.StyledEngineProvider, { injectFirst: true },
        React.createElement(styles_1.ThemeProvider, { theme: props._theme }, props.children)));
}
/**
 * Maps part of the Redux state to the props of this component.
 *
 * @param {Object} state - The Redux state.
 * @returns {IProps}
 */
function _mapStateToProps(state) {
    const { muiBrandedTheme } = state['features/dynamic-branding'];
    return {
        _theme: muiBrandedTheme || BaseTheme_web_1.default
    };
}
exports.default = (0, react_redux_1.connect)(_mapStateToProps)(JitsiThemeProvider);

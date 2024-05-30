"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const functions_web_1 = require("../../../styles/functions.web");
/**
 * Implements a React/Web {@link Component} for displaying text similar to React
 * Native's {@code Text} in order to facilitate cross-platform source code.
 *
 * @augments Component
 */
class Text extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        // eslint-disable-next-line react/prop-types
        const _style = (0, functions_web_1.getFixedPlatformStyle)(this.props.style);
        return react_1.default.createElement('span', {
            ...this.props,
            style: _style
        });
    }
}
exports.default = Text;

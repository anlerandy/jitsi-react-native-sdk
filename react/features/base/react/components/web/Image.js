"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * Implements a React/Web {@link Component} for displaying image
 * in order to facilitate cross-platform source code.
 *
 * @augments Component
 */
class Image extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return react_1.default.createElement('img', this.props);
    }
}
exports.default = Image;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractContainer_1 = require("../AbstractContainer");
/**
 * Represents a container of React/Web {@link Component} children with a style.
 *
 * @augments AbstractContainer
 */
class Container extends AbstractContainer_1.default {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { visible = true } = this.props;
        return visible ? super._render('div') : null;
    }
}
exports.default = Container;

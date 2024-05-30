"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_linkify_1 = require("react-linkify");
const functions_1 = require("../../functions");
/**
 * Implements a react wrapper for the react-linkify component.
 */
class Linkify extends react_1.Component {
    /**
     * Implements {@Component#render}.
     *
     * @inheritdoc
     */
    render() {
        return (react_1.default.createElement(react_linkify_1.default, { componentDecorator: this._componentDecorator }, this.props.children));
    }
    /**
     * Implements a component decorator for react-linkify.
     *
     * @param {string} decoratedHref - The href src.
     * @param {string} decoratedText - The link text.
     * @param {string} key - The component key.
     * @returns {React$Node}
     */
    _componentDecorator(decoratedHref, decoratedText, key) {
        return (react_1.default.createElement("a", { href: decoratedHref, key: key, rel: 'noopener noreferrer', target: '_blank' }, (0, functions_1.formatURLText)(decoratedText)));
    }
}
exports.default = Linkify;

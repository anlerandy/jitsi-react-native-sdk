"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Text_1 = require("./Text");
/**
 * Implements a React/Web {@link Component} that renders the section header of
 * the list.
 *
 * @augments Component
 */
class NavigateSectionListSectionHeader extends react_1.Component {
    /**
     * Renders the content of this component.
     *
     * @returns {ReactElement}
     */
    render() {
        return (react_1.default.createElement(Text_1.default, { className: 'navigate-section-section-header' }, this.props.section.title));
    }
}
exports.default = NavigateSectionListSectionHeader;

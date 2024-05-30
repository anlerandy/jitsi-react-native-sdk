"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Container_1 = require("./Container");
/**
 * Implements a React/Web {@link Component} for displaying a list with
 * sections similar to React Native's {@code SectionList} in order to
 * facilitate cross-platform source code.
 *
 * @augments Component
 */
class SectionList extends react_1.Component {
    /**
     * Renders the content of this component.
     *
     * @returns {React.ReactNode}
     */
    render() {
        const { ListEmptyComponent, renderSectionHeader, renderItem, sections, keyExtractor } = this.props;
        /**
         * If there are no recent items we don't want to display anything.
         */
        if (sections) {
            return (react_1.default.createElement(Container_1.default, { className: 'navigate-section-list' }, sections.length === 0
                ? ListEmptyComponent
                : sections.map((section, sectionIndex) => (react_1.default.createElement(Container_1.default, { key: sectionIndex },
                    renderSectionHeader(section),
                    section.data
                        .map((item, listIndex) => {
                        const listItem = {
                            item
                        };
                        return renderItem(listItem, keyExtractor(section, listIndex));
                    }))))));
        }
        return null;
    }
}
exports.default = SectionList;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Container_1 = require("./Container");
const Text_1 = require("./Text");
/**
 * Implements a React/Web {@link Component} for displaying an item in a
 * NavigateSectionList.
 *
 * @augments Component
 */
class NavigateSectionListItem extends react_1.Component {
    /**
     * Renders the content of this component.
     *
     * @returns {ReactElement}
     */
    render() {
        const { elementAfter, lines, title } = this.props.item;
        const { onPress } = this.props;
        /**
         * Initializes the date and duration of the conference to the an empty
         * string in case for some reason there is an error where the item data
         * lines doesn't contain one or both of those values (even though this
         * unlikely the app shouldn't break because of it).
         *
         * @type {string}
         */
        let date = '';
        let duration = '';
        if (lines[0]) {
            date = lines[0];
        }
        if (lines[1]) {
            duration = lines[1];
        }
        const rootClassName = `navigate-section-list-tile ${onPress ? 'with-click-handler' : 'without-click-handler'}`;
        return (react_1.default.createElement(Container_1.default, { className: rootClassName, onClick: onPress },
            react_1.default.createElement(Container_1.default, { className: 'navigate-section-list-tile-info' },
                react_1.default.createElement(Text_1.default, { className: 'navigate-section-tile-title' }, title),
                react_1.default.createElement(Text_1.default, { className: 'navigate-section-tile-body' }, date),
                react_1.default.createElement(Text_1.default, { className: 'navigate-section-tile-body' }, duration)),
            react_1.default.createElement(Container_1.default, { className: 'element-after' }, elementAfter || null)));
    }
}
exports.default = NavigateSectionListItem;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../polls/functions");
const functions_2 = require("../../functions");
/**
 * Implements a React {@link Component} which displays a count of the number of
 * unread chat messages.
 *
 * @augments Component
 */
class ChatCounter extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (react_1.default.createElement("span", { className: 'badge-round' },
            react_1.default.createElement("span", null, !this.props._isOpen
                && (this.props._count || null))));
    }
}
/**
 * Maps (parts of) the Redux state to the associated {@code ChatCounter}'s
 * props.
 *
 * @param {Object} state - The Redux state.
 * @private
 * @returns {{
 *     _count: number
 * }}
 */
function _mapStateToProps(state) {
    const { isOpen } = state['features/chat'];
    return {
        _count: (0, functions_2.getUnreadCount)(state) + (0, functions_1.getUnreadPollCount)(state),
        _isOpen: isOpen
    };
}
exports.default = (0, react_redux_1.connect)(_mapStateToProps)(ChatCounter);

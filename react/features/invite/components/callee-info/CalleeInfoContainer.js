"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const CalleeInfo_1 = require("./CalleeInfo");
/**
 * Implements a React {@link Component} which depicts the establishment of a
 * call with a specific remote callee if there is such a remote callee.
 *
 * @augments Component
 */
class CalleeInfoContainer extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return this.props._calleeInfoVisible ? react_1.default.createElement(CalleeInfo_1.default, null) : null;
    }
}
/**
 * Maps parts of the redux state to {@link CalleeInfoContainer} (React
 * {@code Component}) props.
 *
 * @param {Object} state - The redux state of which parts are to be mapped to
 * {@code CalleeInfoContainer} props.
 * @private
 * @returns {{
 *     _calleeInfoVisible: boolean
 * }}
 */
function _mapStateToProps(state) {
    return {
        /**
         * The indicator which determines whether {@code CalleeInfo} is to be
         * rendered.
         *
         * @private
         * @type {boolean}
         */
        _calleeInfoVisible: Boolean(state['features/invite'].calleeInfoVisible)
    };
}
exports.default = (0, react_redux_1.connect)(_mapStateToProps)(CalleeInfoContainer);

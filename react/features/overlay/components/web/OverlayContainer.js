"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_web_1 = require("../../functions.web");
/**
 * Implements a React {@link Component} that will display the correct overlay
 * when needed.
 */
class OverlayContainer extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @public
     * @returns {ReactElement|null}
     */
    render() {
        const { overlay } = this.props;
        return overlay ? react_1.default.createElement(overlay, {}) : null;
    }
}
/**
 * Maps (parts of) the redux state to the associated {@code OverlayContainer}'s
 * props.
 *
 * @param {Object} state - The redux state.
 * @private
 * @returns {{
 *     overlay: ?Object
 * }}
 */
function _mapStateToProps(state) {
    return {
        /**
         * The React {@link Component} type of overlay to be rendered by the
         * associated {@code OverlayContainer}.
         */
        overlay: (0, functions_web_1.getOverlayToRender)(state)
    };
}
exports.default = (0, react_redux_1.connect)(_mapStateToProps)(OverlayContainer);

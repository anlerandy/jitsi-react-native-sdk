"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._mapStateToProps = void 0;
const react_1 = require("react");
const isInsecureRoomName_1 = require("../../base/util/isInsecureRoomName");
const functions_1 = require("../../prejoin/functions");
/**
 * Abstract class for the {@Code InsecureRoomNameLabel} component.
 */
class AbstractInsecureRoomNameLabel extends react_1.PureComponent {
    /**
     * Implements {@code Component#render}.
     *
     * @inheritdoc
     */
    render() {
        if (!this.props._visible) {
            return null;
        }
        return this._render();
    }
    /**
     * Renders the platform dependent content.
     *
     * @returns {ReactElement}
     */
    _render() {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
}
exports.default = AbstractInsecureRoomNameLabel;
/**
 * Maps part of the Redux state to the props of this component.
 *
 * @param {Object} state - The Redux state.
 * @returns {IProps}
 */
function _mapStateToProps(state) {
    const { locked, room } = state['features/base/conference'];
    const { lobbyEnabled } = state['features/lobby'];
    return {
        _visible: Boolean((0, functions_1.isUnsafeRoomWarningEnabled)(state)
            && room && (0, isInsecureRoomName_1.default)(room)
            && !(lobbyEnabled || Boolean(locked)))
    };
}
exports._mapStateToProps = _mapStateToProps;

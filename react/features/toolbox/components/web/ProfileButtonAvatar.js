"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const Avatar_1 = require("../../../base/avatar/components/Avatar");
const functions_1 = require("../../../base/participants/functions");
/**
 * A React {@code Component} for displaying a profile avatar as an
 * icon.
 *
 * @augments Component
 */
class ProfileButtonAvatar extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { _localParticipant } = this.props;
        return (react_1.default.createElement(Avatar_1.default, { participantId: _localParticipant?.id, size: 20 }));
    }
}
/**
 * Maps (parts of) the Redux state to the associated
 * {@code ProfileButtonAvatar} component's props.
 *
 * @param {Object} state - The Redux state.
 * @private
 * @returns {{
 *     _localParticipant: Object,
 * }}
 */
function _mapStateToProps(state) {
    return {
        _localParticipant: (0, functions_1.getLocalParticipant)(state)
    };
}
exports.default = (0, react_redux_1.connect)(_mapStateToProps)(ProfileButtonAvatar);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../base/i18n/functions");
const functions_2 = require("../../../base/participants/functions");
const FakeParticipantContextMenu_1 = require("../../../video-menu/components/web/FakeParticipantContextMenu");
const ParticipantContextMenu_1 = require("../../../video-menu/components/web/ParticipantContextMenu");
/**
 * Implements the MeetingParticipantContextMenu component.
 */
class MeetingParticipantContextMenu extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { _localVideoOwner, _participant, closeDrawer, drawerParticipant, offsetTarget, onEnter, onLeave, onSelect } = this.props;
        if (!_participant) {
            return null;
        }
        const props = {
            closeDrawer,
            drawerParticipant,
            offsetTarget,
            onEnter,
            onLeave,
            onSelect,
            participant: _participant,
            thumbnailMenu: false
        };
        if (_participant?.fakeParticipant) {
            return (react_1.default.createElement(FakeParticipantContextMenu_1.default, { ...props, localVideoOwner: _localVideoOwner }));
        }
        return react_1.default.createElement(ParticipantContextMenu_1.default, { ...props });
    }
}
/**
 * Maps (parts of) the redux state to the associated props for this component.
 *
 * @param {Object} state - The Redux state.
 * @param {Object} ownProps - The own props of the component.
 * @private
 * @returns {IProps}
 */
function _mapStateToProps(state, ownProps) {
    const { participantID, overflowDrawer, drawerParticipant } = ownProps;
    const { ownerId } = state['features/shared-video'];
    const localParticipantId = (0, functions_2.getLocalParticipant)(state)?.id;
    const participant = (0, functions_2.getParticipantByIdOrUndefined)(state, overflowDrawer ? drawerParticipant?.participantID : participantID);
    return {
        _localVideoOwner: Boolean(ownerId === localParticipantId),
        _participant: participant
    };
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(_mapStateToProps)(MeetingParticipantContextMenu));

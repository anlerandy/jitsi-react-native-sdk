"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const AnalyticsEvents_1 = require("../../../analytics/AnalyticsEvents");
const functions_1 = require("../../../analytics/functions");
const actions_1 = require("../../../av-moderation/actions");
const svg_1 = require("../../../base/icons/svg");
const constants_1 = require("../../../base/media/constants");
const functions_any_1 = require("../../../base/tracks/functions.any");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const types_1 = require("../../../toolbox/types");
const actions_any_1 = require("../../actions.any");
/**
 * Implements a React {@link Component} which displays a button for audio muting
 * a participant in the conference.
 *
 * @returns {JSX.Element|null}
 */
const MuteButton = ({ notifyClick, notifyMode, participantID }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const tracks = (0, react_redux_1.useSelector)((state) => state['features/base/tracks']);
    const audioTrackMuted = (0, react_1.useMemo)(() => (0, functions_any_1.isRemoteTrackMuted)(tracks, constants_1.MEDIA_TYPE.AUDIO, participantID), [functions_any_1.isRemoteTrackMuted, participantID, tracks]);
    const handleClick = (0, react_1.useCallback)(() => {
        notifyClick?.();
        if (notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY) {
            return;
        }
        (0, functions_1.sendAnalytics)((0, AnalyticsEvents_1.createRemoteVideoMenuButtonEvent)('mute', {
            'participant_id': participantID
        }));
        dispatch((0, actions_any_1.muteRemote)(participantID, constants_1.MEDIA_TYPE.AUDIO));
        dispatch((0, actions_1.rejectParticipantAudio)(participantID));
    }, [dispatch, notifyClick, notifyMode, participantID, functions_1.sendAnalytics]);
    if (audioTrackMuted) {
        return null;
    }
    return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: t('dialog.muteParticipantButton'), className: 'mutelink', icon: svg_1.IconMicSlash, onClick: handleClick, text: t('dialog.muteParticipantButton') }));
};
exports.default = MuteButton;

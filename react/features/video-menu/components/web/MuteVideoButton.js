"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const AnalyticsEvents_1 = require("../../../analytics/AnalyticsEvents");
const functions_1 = require("../../../analytics/functions");
const actions_1 = require("../../../base/dialog/actions");
const svg_1 = require("../../../base/icons/svg");
const constants_1 = require("../../../base/media/constants");
const functions_any_1 = require("../../../base/tracks/functions.any");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const types_1 = require("../../../toolbox/types");
const MuteRemoteParticipantsVideoDialog_1 = require("./MuteRemoteParticipantsVideoDialog");
/**
 * Implements a React {@link Component} which displays a button for disabling
 * the camera of a participant in the conference.
 *
 * @returns {JSX.Element|null}
 */
const MuteVideoButton = ({ notifyClick, notifyMode, participantID }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const tracks = (0, react_redux_1.useSelector)((state) => state['features/base/tracks']);
    const videoTrackMuted = (0, react_1.useMemo)(() => (0, functions_any_1.isRemoteTrackMuted)(tracks, constants_1.MEDIA_TYPE.VIDEO, participantID), [functions_any_1.isRemoteTrackMuted, participantID, tracks]);
    const handleClick = (0, react_1.useCallback)(() => {
        notifyClick?.();
        if (notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY) {
            return;
        }
        (0, functions_1.sendAnalytics)((0, AnalyticsEvents_1.createRemoteVideoMenuButtonEvent)('video.mute.button', {
            'participant_id': participantID
        }));
        dispatch((0, actions_1.openDialog)(MuteRemoteParticipantsVideoDialog_1.default, { participantID }));
    }, [dispatch, notifyClick, notifyClick, participantID, functions_1.sendAnalytics]);
    if (videoTrackMuted) {
        return null;
    }
    return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: t('participantsPane.actions.stopVideo'), className: 'mutevideolink', icon: svg_1.IconVideoOff, onClick: handleClick, text: t('participantsPane.actions.stopVideo') }));
};
exports.default = MuteVideoButton;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const actions_1 = require("../../../av-moderation/actions");
const svg_1 = require("../../../base/icons/svg");
const constants_1 = require("../../../base/media/constants");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const types_1 = require("../../../toolbox/types");
/**
 * Implements a React {@link Component} which displays a button that
 * allows the moderator to request from a participant to mute themselves.
 *
 * @returns {JSX.Element}
 */
const AskToUnmuteButton = ({ buttonType, notifyMode, notifyClick, participantID }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const _onClick = (0, react_1.useCallback)(() => {
        notifyClick?.();
        if (notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY) {
            return;
        }
        if (buttonType === constants_1.MEDIA_TYPE.AUDIO) {
            dispatch((0, actions_1.approveParticipantAudio)(participantID));
        }
        else if (buttonType === constants_1.MEDIA_TYPE.VIDEO) {
            dispatch((0, actions_1.approveParticipantVideo)(participantID));
        }
    }, [buttonType, dispatch, notifyClick, notifyMode, participantID]);
    const text = (0, react_1.useMemo)(() => {
        if (buttonType === constants_1.MEDIA_TYPE.AUDIO) {
            return t('participantsPane.actions.askUnmute');
        }
        else if (buttonType === constants_1.MEDIA_TYPE.VIDEO) {
            return t('participantsPane.actions.allowVideo');
        }
        return '';
    }, [buttonType]);
    const icon = (0, react_1.useMemo)(() => {
        if (buttonType === constants_1.MEDIA_TYPE.AUDIO) {
            return svg_1.IconMic;
        }
        else if (buttonType === constants_1.MEDIA_TYPE.VIDEO) {
            return svg_1.IconVideo;
        }
    }, [buttonType]);
    return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: text, icon: icon, onClick: _onClick, testId: `unmute-${buttonType}-${participantID}`, text: text }));
};
exports.default = AskToUnmuteButton;

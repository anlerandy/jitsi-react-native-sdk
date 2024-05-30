"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const actions_1 = require("../../../av-moderation/actions");
const Button_1 = require("../../../base/ui/components/web/Button");
const constants_1 = require("../../constants");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        button: {
            marginRight: theme.spacing(2)
        }
    };
});
const ParticipantQuickAction = ({ buttonType, muteAudio, participantID, participantName, stopVideo }) => {
    const { classes: styles } = useStyles();
    const dispatch = (0, react_redux_1.useDispatch)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const askToUnmute = (0, react_1.useCallback)(() => {
        dispatch((0, actions_1.approveParticipantAudio)(participantID));
    }, [dispatch, participantID]);
    const allowVideo = (0, react_1.useCallback)(() => {
        dispatch((0, actions_1.approveParticipantVideo)(participantID));
    }, [dispatch, participantID]);
    switch (buttonType) {
        case constants_1.QUICK_ACTION_BUTTON.MUTE: {
            return (react_1.default.createElement(Button_1.default, { accessibilityLabel: `${t('participantsPane.actions.mute')} ${participantName}`, className: styles.button, label: t('participantsPane.actions.mute'), onClick: muteAudio(participantID), size: 'small', testId: `mute-audio-${participantID}` }));
        }
        case constants_1.QUICK_ACTION_BUTTON.ASK_TO_UNMUTE: {
            return (react_1.default.createElement(Button_1.default, { accessibilityLabel: `${t('participantsPane.actions.askUnmute')} ${participantName}`, className: styles.button, label: t('participantsPane.actions.askUnmute'), onClick: askToUnmute, size: 'small', testId: `unmute-audio-${participantID}` }));
        }
        case constants_1.QUICK_ACTION_BUTTON.ALLOW_VIDEO: {
            return (react_1.default.createElement(Button_1.default, { accessibilityLabel: `${t('participantsPane.actions.askUnmute')} ${participantName}`, className: styles.button, label: t('participantsPane.actions.allowVideo'), onClick: allowVideo, size: 'small', testId: `unmute-video-${participantID}` }));
        }
        case constants_1.QUICK_ACTION_BUTTON.STOP_VIDEO: {
            return (react_1.default.createElement(Button_1.default, { accessibilityLabel: `${t('participantsPane.actions.mute')} ${participantName}`, className: styles.button, label: t('participantsPane.actions.stopVideo'), onClick: stopVideo(participantID), size: 'small', testId: `mute-video-${participantID}` }));
        }
        default: {
            return null;
        }
    }
};
exports.default = ParticipantQuickAction;

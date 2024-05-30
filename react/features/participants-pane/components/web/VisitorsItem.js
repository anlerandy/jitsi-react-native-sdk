"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorsItem = void 0;
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const Button_1 = require("../../../base/ui/components/web/Button");
const constants_web_1 = require("../../../base/ui/constants.web");
const actions_1 = require("../../../visitors/actions");
const constants_1 = require("../../constants");
const ParticipantItem_1 = require("./ParticipantItem");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        button: {
            marginRight: theme.spacing(2)
        },
        moreButton: {
            paddingRight: '6px',
            paddingLeft: '6px',
            marginRight: theme.spacing(2)
        },
        contextMenu: {
            position: 'fixed',
            top: 'auto',
            marginRight: '8px'
        }
    };
});
const VisitorsItem = ({ request: r }) => {
    const { from, nick } = r;
    const { t } = (0, react_i18next_1.useTranslation)();
    const { classes: styles } = useStyles();
    const dispatch = (0, react_redux_1.useDispatch)();
    const admit = (0, react_1.useCallback)(() => dispatch((0, actions_1.approveRequest)(r)), [dispatch, r]);
    const reject = (0, react_1.useCallback)(() => dispatch((0, actions_1.denyRequest)(r)), [dispatch, r]);
    return (react_1.default.createElement(ParticipantItem_1.default, { actionsTrigger: constants_1.ACTION_TRIGGER.PERMANENT, audioMediaState: constants_1.MEDIA_STATE.NONE, displayName: nick, participantID: from, raisedHand: true, videoMediaState: constants_1.MEDIA_STATE.NONE, youText: t('chat.you') }, react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Button_1.default, { accessibilityLabel: `${t('participantsPane.actions.reject')} ${r.nick}`, className: styles.button, labelKey: 'participantsPane.actions.reject', onClick: reject, size: 'small', testId: `reject-${from}`, type: constants_web_1.BUTTON_TYPES.DESTRUCTIVE }),
        react_1.default.createElement(Button_1.default, { accessibilityLabel: `${t('participantsPane.actions.admit')} ${r.nick}`, className: styles.button, labelKey: 'participantsPane.actions.admit', onClick: admit, size: 'small', testId: `admit-${from}` }))));
};
exports.VisitorsItem = VisitorsItem;

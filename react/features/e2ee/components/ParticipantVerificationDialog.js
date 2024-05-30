"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._mapStateToProps = void 0;
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const functions_1 = require("../../base/participants/functions");
const Dialog_1 = require("../../base/ui/components/web/Dialog");
const actions_1 = require("../actions");
const useStyles = (0, mui_1.makeStyles)()(() => {
    return {
        container: {
            display: 'flex',
            flexDirection: 'column',
            margin: '16px'
        },
        row: {
            alignSelf: 'center',
            display: 'flex'
        },
        item: {
            textAlign: 'center',
            margin: '16px'
        },
        emoji: {
            fontSize: '40px',
            margin: '12px'
        }
    };
});
const ParticipantVerificationDialog = ({ dispatch, participantName, pId, sas }) => {
    const { classes } = useStyles();
    const { t } = (0, react_i18next_1.useTranslation)();
    const _onDismissed = (0, react_1.useCallback)(() => {
        dispatch((0, actions_1.participantVerified)(pId, false));
        return true;
    }, [pId]);
    const _onConfirmed = (0, react_1.useCallback)(() => {
        dispatch((0, actions_1.participantVerified)(pId, true));
        return true;
    }, [pId]);
    const { emoji } = sas;
    return (react_1.default.createElement(Dialog_1.default, { cancel: { translationKey: 'dialog.verifyParticipantDismiss' }, ok: { translationKey: 'dialog.verifyParticipantConfirm' }, onCancel: _onDismissed, onSubmit: _onConfirmed, titleKey: 'dialog.verifyParticipantTitle' },
        react_1.default.createElement("div", null, t('dialog.verifyParticipantQuestion', { participantName })),
        react_1.default.createElement("div", { className: classes.container },
            react_1.default.createElement("div", { className: classes.row }, emoji.slice(0, 4).map((e) => (react_1.default.createElement("div", { className: classes.item, key: e.toString() },
                react_1.default.createElement("div", { className: classes.emoji }, e[0]),
                react_1.default.createElement("div", null, e[1].charAt(0).toUpperCase() + e[1].slice(1)))))),
            react_1.default.createElement("div", { className: classes.row }, emoji.slice(4, 7).map((e) => (react_1.default.createElement("div", { className: classes.item, key: e.toString() },
                react_1.default.createElement("div", { className: classes.emoji },
                    e[0],
                    " "),
                react_1.default.createElement("div", null, e[1].charAt(0).toUpperCase() + e[1].slice(1)))))))));
};
/**
 * Maps part of the Redux store to the props of this component.
 *
 * @param {IReduxState} state - The Redux state.
 * @param {IProps} ownProps - The own props of the component.
 * @returns {IProps}
 */
function _mapStateToProps(state, ownProps) {
    const participant = (0, functions_1.getParticipantById)(state, ownProps.pId);
    return {
        sas: ownProps.sas,
        pId: ownProps.pId,
        participantName: participant?.name
    };
}
exports._mapStateToProps = _mapStateToProps;
exports.default = (0, react_redux_1.connect)(_mapStateToProps)(ParticipantVerificationDialog);

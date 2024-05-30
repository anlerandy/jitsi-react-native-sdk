"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const Dialog_1 = require("../../../base/ui/components/web/Dialog");
const actions_1 = require("../../../visitors/actions");
/**
 * Dialog to confirm a remote participant demote action.
 *
 * @returns {JSX.Element}
 */
function DemoteToVisitorDialog({ participantID }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleSubmit = (0, react_1.useCallback)(() => {
        dispatch((0, actions_1.demoteRequest)(participantID));
    }, [dispatch, participantID]);
    return (react_1.default.createElement(Dialog_1.default, { ok: { translationKey: 'dialog.confirm' }, onSubmit: handleSubmit, titleKey: 'dialog.demoteParticipantTitle' },
        react_1.default.createElement("div", null, t('dialog.demoteParticipantDialog'))));
}
exports.default = DemoteToVisitorDialog;

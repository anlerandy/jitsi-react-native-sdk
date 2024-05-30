"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const svg_1 = require("../../../base/icons/svg");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const actions_1 = require("../../../e2ee/actions");
const types_1 = require("../../../toolbox/types");
/**
 * Implements a React {@link Component} which displays a button that
 * verifies the participant.
 *
 * @returns {JSX.Element}
 */
const VerifyParticipantButton = ({ notifyClick, notifyMode, participantID }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const _handleClick = (0, react_1.useCallback)(() => {
        notifyClick?.();
        if (notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY) {
            return;
        }
        dispatch((0, actions_1.startVerification)(participantID));
    }, [dispatch, notifyClick, notifyMode, participantID]);
    return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: t('videothumbnail.verify'), className: 'verifylink', icon: svg_1.IconCheck, id: `verifylink_${participantID}`, 
        // eslint-disable-next-line react/jsx-handler-names
        onClick: _handleClick, text: t('videothumbnail.verify') }));
};
exports.default = VerifyParticipantButton;

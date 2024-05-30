"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const actions_1 = require("../../../base/dialog/actions");
const svg_1 = require("../../../base/icons/svg");
const constants_1 = require("../../../base/participants/constants");
const functions_1 = require("../../../base/participants/functions");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const types_1 = require("../../../toolbox/types");
const GrantModeratorDialog_1 = require("./GrantModeratorDialog");
/**
 * Implements a React {@link Component} which displays a button for granting
 * moderator to a participant.
 *
 * @returns {JSX.Element|null}
 */
const GrantModeratorButton = ({ notifyClick, notifyMode, participantID }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const localParticipant = (0, react_redux_1.useSelector)(functions_1.getLocalParticipant);
    const targetParticipant = (0, react_redux_1.useSelector)((state) => (0, functions_1.getParticipantById)(state, participantID));
    const visible = (0, react_1.useMemo)(() => Boolean(localParticipant?.role === constants_1.PARTICIPANT_ROLE.MODERATOR)
        && !(0, functions_1.isParticipantModerator)(targetParticipant), [functions_1.isParticipantModerator, localParticipant, targetParticipant]);
    const handleClick = (0, react_1.useCallback)(() => {
        notifyClick?.();
        if (notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY) {
            return;
        }
        dispatch((0, actions_1.openDialog)(GrantModeratorDialog_1.default, { participantID }));
    }, [dispatch, notifyClick, notifyMode, participantID]);
    if (!visible) {
        return null;
    }
    return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: t('toolbar.accessibilityLabel.grantModerator'), className: 'grantmoderatorlink', icon: svg_1.IconModerator, onClick: handleClick, text: t('videothumbnail.grantModerator') }));
};
exports.default = GrantModeratorButton;

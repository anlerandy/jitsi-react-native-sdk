"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const actions_1 = require("../../../base/dialog/actions");
const svg_1 = require("../../../base/icons/svg");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const types_1 = require("../../../toolbox/types");
const KickRemoteParticipantDialog_1 = require("./KickRemoteParticipantDialog");
/**
 * Implements a React {@link Component} which displays a button for kicking out
 * a participant from the conference.
 *
 * @returns {JSX.Element}
 */
const KickButton = ({ notifyClick, notifyMode, participantID }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleClick = (0, react_1.useCallback)(() => {
        notifyClick?.();
        if (notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY) {
            return;
        }
        dispatch((0, actions_1.openDialog)(KickRemoteParticipantDialog_1.default, { participantID }));
    }, [dispatch, notifyClick, notifyMode, participantID]);
    return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: t('videothumbnail.kick'), className: 'kicklink', icon: svg_1.IconUserDeleted, id: `ejectlink_${participantID}`, onClick: handleClick, text: t('videothumbnail.kick') }));
};
exports.default = KickButton;

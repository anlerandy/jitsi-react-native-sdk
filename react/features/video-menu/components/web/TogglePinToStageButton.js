"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const svg_1 = require("../../../base/icons/svg");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const actions_web_1 = require("../../../filmstrip/actions.web");
const functions_web_1 = require("../../../filmstrip/functions.web");
const types_1 = require("../../../toolbox/types");
const TogglePinToStageButton = ({ className, noIcon = false, notifyClick, notifyMode, onClick, participantID }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const isActive = Boolean((0, react_redux_1.useSelector)(functions_web_1.getPinnedActiveParticipants)
        .find(p => p.participantId === participantID));
    const _onClick = (0, react_1.useCallback)(() => {
        notifyClick?.();
        if (notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY) {
            return;
        }
        dispatch((0, actions_web_1.togglePinStageParticipant)(participantID));
        onClick?.();
    }, [dispatch, isActive, notifyClick, onClick, participantID]);
    const text = isActive
        ? t('videothumbnail.unpinFromStage')
        : t('videothumbnail.pinToStage');
    const icon = isActive ? svg_1.IconPinned : svg_1.IconPin;
    return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: text, icon: noIcon ? null : icon, onClick: _onClick, text: text, textClassName: className }));
};
exports.default = TogglePinToStageButton;

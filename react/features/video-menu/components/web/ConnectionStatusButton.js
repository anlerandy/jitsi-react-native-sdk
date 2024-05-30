"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const svg_1 = require("../../../base/icons/svg");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const types_1 = require("../../../toolbox/types");
const actions_web_1 = require("../../actions.web");
/**
 * Implements a React {@link Component} which displays a button that shows
 * the connection status for the given participant.
 *
 * @returns {JSX.Element}
 */
const ConnectionStatusButton = ({ notifyClick, notifyMode }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleClick = (0, react_1.useCallback)(e => {
        e.stopPropagation();
        notifyClick?.();
        if (notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY) {
            return;
        }
        dispatch((0, actions_web_1.renderConnectionStatus)(true));
    }, [dispatch, notifyClick, notifyMode]);
    return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: t('videothumbnail.connectionInfo'), icon: svg_1.IconInfoCircle, onClick: handleClick, text: t('videothumbnail.connectionInfo') }));
};
exports.default = ConnectionStatusButton;

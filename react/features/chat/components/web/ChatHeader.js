"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const Icon_1 = require("../../../base/icons/components/Icon");
const svg_1 = require("../../../base/icons/svg");
const actions_web_1 = require("../../actions.web");
/**
 * Custom header of the {@code ChatDialog}.
 *
 * @returns {React$Element<any>}
 */
function ChatHeader({ className, isPollsEnabled }) {
    const dispatch = (0, react_redux_1.useDispatch)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const onCancel = (0, react_1.useCallback)(() => {
        dispatch((0, actions_web_1.toggleChat)());
    }, []);
    const onKeyPressHandler = (0, react_1.useCallback)(e => {
        if (onCancel && (e.key === ' ' || e.key === 'Enter')) {
            e.preventDefault();
            onCancel();
        }
    }, []);
    return (react_1.default.createElement("div", { className: className || 'chat-dialog-header' },
        react_1.default.createElement("span", { "aria-level": 1, role: 'heading' }, t(isPollsEnabled ? 'chat.titleWithPolls' : 'chat.title')),
        react_1.default.createElement(Icon_1.default, { ariaLabel: t('toolbar.closeChat'), onClick: onCancel, onKeyPress: onKeyPressHandler, role: 'button', src: svg_1.IconCloseLarge, tabIndex: 0 })));
}
exports.default = ChatHeader;

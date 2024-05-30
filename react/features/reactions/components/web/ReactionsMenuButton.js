"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const utils_1 = require("../../../base/environment/utils");
const functions_1 = require("../../../base/i18n/functions");
const svg_1 = require("../../../base/icons/svg");
const AbstractButton_1 = require("../../../base/toolbox/components/AbstractButton");
const ToolboxButtonWithPopup_1 = require("../../../base/toolbox/components/web/ToolboxButtonWithPopup");
const actions_web_1 = require("../../actions.web");
const functions_any_1 = require("../../functions.any");
const functions_web_1 = require("../../functions.web");
const types_1 = require("../../types");
const RaiseHandButton_1 = require("./RaiseHandButton");
const ReactionEmoji_1 = require("./ReactionEmoji");
const ReactionsMenu_1 = require("./ReactionsMenu");
/**
 * Implementation of a button for reactions.
 */
class ReactionsButtonImpl extends AbstractButton_1.default {
    constructor() {
        super(...arguments);
        this.accessibilityLabel = 'toolbar.accessibilityLabel.reactions';
        this.icon = svg_1.IconFaceSmile;
        this.label = 'toolbar.reactions';
        this.toggledLabel = 'toolbar.reactions';
        this.tooltip = 'toolbar.reactions';
    }
}
const ReactionsButton = (0, functions_1.translate)((0, react_redux_1.connect)()(ReactionsButtonImpl));
/**
 * Button used for the reactions menu.
 *
 * @returns {ReactElement}
 */
function ReactionsMenuButton({ _reactionsButtonEnabled, _isMobile, buttonKey, dispatch, isOpen, isNarrow, notifyMode, reactionsQueue, showRaiseHand, t }) {
    const toggleReactionsMenu = (0, react_1.useCallback)(() => {
        dispatch((0, actions_web_1.toggleReactionsMenuVisibility)());
    }, [dispatch]);
    const openReactionsMenu = (0, react_1.useCallback)(() => {
        !isOpen && toggleReactionsMenu();
    }, [isOpen, toggleReactionsMenu]);
    const closeReactionsMenu = (0, react_1.useCallback)(() => {
        isOpen && toggleReactionsMenu();
    }, [isOpen, toggleReactionsMenu]);
    if (!showRaiseHand && !_reactionsButtonEnabled) {
        return null;
    }
    const reactionsMenu = (react_1.default.createElement("div", { className: 'reactions-menu-container' },
        react_1.default.createElement(ReactionsMenu_1.default, { parent: types_1.IReactionsMenuParent.Button })));
    let content = null;
    if (showRaiseHand) {
        content = isNarrow
            ? (react_1.default.createElement(RaiseHandButton_1.default, { buttonKey: buttonKey, notifyMode: notifyMode }))
            : (react_1.default.createElement(ToolboxButtonWithPopup_1.default, { ariaLabel: t('toolbar.accessibilityLabel.reactionsMenu'), icon: svg_1.IconArrowUp, iconDisabled: false, onPopoverClose: toggleReactionsMenu, onPopoverOpen: openReactionsMenu, popoverContent: reactionsMenu, visible: isOpen },
                react_1.default.createElement(RaiseHandButton_1.default, { buttonKey: buttonKey, notifyMode: notifyMode })));
    }
    else {
        content = (react_1.default.createElement(ToolboxButtonWithPopup_1.default, { ariaLabel: t('toolbar.accessibilityLabel.reactionsMenu'), onPopoverClose: closeReactionsMenu, onPopoverOpen: openReactionsMenu, popoverContent: reactionsMenu, trigger: _isMobile ? 'click' : undefined, visible: isOpen },
            react_1.default.createElement(ReactionsButton, { buttonKey: buttonKey, notifyMode: notifyMode })));
    }
    return (react_1.default.createElement("div", { className: 'reactions-menu-popup-container' },
        content,
        reactionsQueue.map(({ reaction, uid }, index) => (react_1.default.createElement(ReactionEmoji_1.default, { index: index, key: uid, reaction: reaction, uid: uid })))));
}
/**
 * Function that maps parts of Redux state tree into component props.
 *
 * @param {Object} state - Redux state.
 * @returns {Object}
 */
function mapStateToProps(state) {
    const { isNarrowLayout } = state['features/base/responsive-ui'];
    return {
        _reactionsButtonEnabled: (0, functions_web_1.isReactionsButtonEnabled)(state),
        _isMobile: (0, utils_1.isMobileBrowser)(),
        isOpen: (0, functions_web_1.getReactionsMenuVisibility)(state),
        isNarrow: isNarrowLayout,
        reactionsQueue: (0, functions_any_1.getReactionsQueue)(state)
    };
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(mapStateToProps)(ReactionsMenuButton));

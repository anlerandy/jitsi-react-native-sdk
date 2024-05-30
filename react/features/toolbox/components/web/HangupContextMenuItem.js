"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HangupContextMenuItem = void 0;
const react_1 = require("react");
const Button_1 = require("../../../base/ui/components/web/Button");
const types_1 = require("../../types");
/**
 * Implementation of a button to be rendered within Hangup context menu.
 *
 * @param {Object} props - Component's props.
 * @returns {JSX.Element} - Button that would trigger the hangup action.
 */
const HangupContextMenuItem = (props) => {
    const shouldNotify = props.notifyMode !== undefined;
    const shouldPreventExecution = props.notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY;
    const _onClick = (0, react_1.useCallback)(() => {
        if (shouldNotify) {
            APP.API.notifyToolbarButtonClicked(props.buttonKey, shouldPreventExecution);
        }
        if (!shouldPreventExecution) {
            props.onClick();
        }
    }, []);
    return (react_1.default.createElement(Button_1.default, { accessibilityLabel: props.accessibilityLabel, fullWidth: true, label: props.label, onClick: _onClick, type: props.buttonType }));
};
exports.HangupContextMenuItem = HangupContextMenuItem;

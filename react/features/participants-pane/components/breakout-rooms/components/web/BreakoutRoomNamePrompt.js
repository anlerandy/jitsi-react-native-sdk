"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const Dialog_1 = require("../../../../../base/ui/components/web/Dialog");
const Input_1 = require("../../../../../base/ui/components/web/Input");
const actions_1 = require("../../../../../breakout-rooms/actions");
/**
 * Implements a React {@code Component} for displaying a dialog with an field
 * for setting a breakout room's name.
 *
 * @param {IProps} props - The props of the component.
 * @returns {JSX.Element}
 */
function BreakoutRoomNamePrompt({ breakoutRoomJid, initialRoomName }) {
    const [roomName, setRoomName] = (0, react_1.useState)(initialRoomName?.trim());
    const { t } = (0, react_i18next_1.useTranslation)();
    const okDisabled = !roomName;
    const dispatch = (0, react_redux_1.useDispatch)();
    const onBreakoutRoomNameChange = (0, react_1.useCallback)((newRoomName) => {
        setRoomName(newRoomName);
    }, [setRoomName]);
    const onSubmit = (0, react_1.useCallback)(() => {
        dispatch((0, actions_1.renameBreakoutRoom)(breakoutRoomJid, roomName?.trim()));
    }, [breakoutRoomJid, dispatch, roomName]);
    return (react_1.default.createElement(Dialog_1.default, { ok: {
            disabled: okDisabled,
            translationKey: 'dialog.Ok'
        }, onSubmit: onSubmit, titleKey: 'dialog.renameBreakoutRoomTitle' },
        react_1.default.createElement(Input_1.default, { autoFocus: true, className: 'dialog-bottom-margin', id: 'breakout-rooms-name-input', label: t('dialog.renameBreakoutRoomLabel'), name: 'breakoutRoomName', onChange: onBreakoutRoomNameChange, type: 'text', value: roomName })));
}
exports.default = BreakoutRoomNamePrompt;

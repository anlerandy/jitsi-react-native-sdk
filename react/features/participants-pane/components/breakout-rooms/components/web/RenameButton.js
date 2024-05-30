"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const actions_1 = require("../../../../../base/dialog/actions");
const svg_1 = require("../../../../../base/icons/svg");
const BreakoutRoomNamePrompt_1 = require("./BreakoutRoomNamePrompt");
const useStyles = (0, mui_1.makeStyles)()(_theme => {
    return {
        container: {
            position: 'absolute',
            cursor: 'pointer',
            marginTop: 2,
            marginLeft: 5
        }
    };
});
/**
 * Implements the rename button component which is displayed only for renaming a breakout room which is joined by the
 * user.
 *
 * @param {IProps} props - The props of the component.
 * @returns {JSX.Element}
 */
function RenameButton({ breakoutRoomJid, name }) {
    const dispatch = (0, react_redux_1.useDispatch)();
    const { classes, cx } = useStyles();
    const onRename = (0, react_1.useCallback)(() => {
        dispatch((0, actions_1.openDialog)(BreakoutRoomNamePrompt_1.default, {
            breakoutRoomJid,
            initialRoomName: name
        }));
    }, [dispatch, breakoutRoomJid, name]);
    return (react_1.default.createElement("span", { className: cx('jitsi-icon jitsi-icon-default', classes.container), onClick: onRename },
        react_1.default.createElement(svg_1.IconEdit, { height: 16, key: 1, width: 16 })));
}
exports.default = RenameButton;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const mui_1 = require("tss-react/mui");
const Dialog_1 = require("../../../base/ui/components/web/Dialog");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        dialog: {
            marginBottom: theme.spacing(1)
        },
        text: {
            fontSize: '20px'
        }
    };
});
/**
 * A React {@code Component} for displaying a dialog with a reason that ended the conference.
 *
 * @param {IProps} props - Component's props.
 * @returns {JSX}
 */
const LeaveReasonDialog = ({ onClose, title }) => {
    const { classes } = useStyles();
    const { t } = (0, react_i18next_1.useTranslation)();
    (0, react_1.useEffect)(() => () => {
        onClose?.();
    }, []);
    return (react_1.default.createElement(Dialog_1.default, { cancel: { hidden: true }, onSubmit: onClose, size: 'medium', testId: 'dialog.leaveReason' },
        react_1.default.createElement("div", { className: classes.dialog }, title ? react_1.default.createElement("div", { className: classes.text }, t(title)) : null)));
};
exports.default = LeaveReasonDialog;

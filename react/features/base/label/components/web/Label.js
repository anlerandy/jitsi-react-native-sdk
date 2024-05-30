"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const Icon_1 = require("../../../icons/components/Icon");
const functions_web_1 = require("../../../styles/functions.web");
const constants_1 = require("../../constants");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        label: {
            ...(0, functions_web_1.withPixelLineHeight)(theme.typography.labelRegular),
            alignItems: 'center',
            background: theme.palette.ui04,
            borderRadius: '4px',
            color: theme.palette.text01,
            display: 'flex',
            margin: '0 2px',
            padding: '6px',
            height: 28,
            boxSizing: 'border-box'
        },
        withIcon: {
            marginLeft: 8
        },
        clickable: {
            cursor: 'pointer'
        },
        [constants_1.COLORS.white]: {
            background: theme.palette.ui09,
            color: theme.palette.text04,
            '& svg': {
                fill: theme.palette.icon04
            }
        },
        [constants_1.COLORS.green]: {
            background: theme.palette.success02
        },
        [constants_1.COLORS.red]: {
            background: theme.palette.actionDanger
        }
    };
});
const Label = ({ accessibilityText, className, color, icon, iconColor, id, onClick, text }) => {
    const { classes, cx } = useStyles();
    const onKeyPress = (0, react_1.useCallback)(event => {
        if (!onClick) {
            return;
        }
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick();
        }
    }, [onClick]);
    return (react_1.default.createElement("div", { className: cx(classes.label, onClick && classes.clickable, color && classes[color], className), id: id, onClick: onClick, onKeyPress: onKeyPress, role: onClick ? 'button' : undefined, tabIndex: onClick ? 0 : undefined },
        icon && react_1.default.createElement(Icon_1.default, { color: iconColor, size: '16', src: icon }),
        accessibilityText && react_1.default.createElement("span", { className: 'sr-only' }, accessibilityText),
        text && react_1.default.createElement("span", { className: icon && classes.withIcon }, text)));
};
exports.default = Label;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const Icon_1 = require("../../../../base/icons/components/Icon");
const svg_1 = require("../../../../base/icons/svg");
const functions_web_1 = require("../../../../base/styles/functions.web");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        container: {
            padding: '8px 10px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            backgroundColor: theme.palette.ui01,
            borderRight: `1px solid ${theme.palette.ui03}`,
            color: theme.palette.text01,
            ...(0, functions_web_1.withPixelLineHeight)(theme.typography.bodyShortRegular),
            position: 'relative',
            width: '88px',
            borderTopLeftRadius: theme.shape.borderRadius,
            borderBottomLeftRadius: theme.shape.borderRadius
        },
        text: {
            flexGrow: 1
        },
        flag: {
            marginRight: theme.spacing(2)
        }
    };
});
/**
 * This component displays the country selector with the flag.
 *
 * @returns {ReactElement}
 */
function CountrySelector({ country: { code, dialCode }, onClick }) {
    const { classes, cx } = useStyles();
    const onKeyPressHandler = (0, react_1.useCallback)(e => {
        if (onClick && (e.key === ' ' || e.key === 'Enter')) {
            e.preventDefault();
            onClick();
        }
    }, [onClick]);
    return (react_1.default.createElement("div", { className: classes.container, onClick: onClick, onKeyPress: onKeyPressHandler },
        react_1.default.createElement("div", { className: cx(classes.flag, 'iti-flag', code) }),
        react_1.default.createElement("span", { className: classes.text }, `+${dialCode}`),
        react_1.default.createElement(Icon_1.default, { size: 16, src: svg_1.IconArrowDown })));
}
exports.default = CountrySelector;

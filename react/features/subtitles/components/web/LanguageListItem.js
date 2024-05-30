"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const functions_1 = require("../../../base/i18n/functions");
const Icon_1 = require("../../../base/icons/components/Icon");
const svg_1 = require("../../../base/icons/svg");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        itemContainer: {
            display: 'flex',
            color: theme.palette.text02,
            alignItems: 'center',
            fontSize: '14px',
            cursor: 'pointer',
            padding: '5px 0',
            '&:hover': {
                backgroundColor: theme.palette.ui04
            }
        },
        iconWrapper: {
            margin: '4px 10px',
            width: '22px',
            height: '22px'
        },
        activeItemContainer: {
            fontWeight: 700
        }
    };
});
/**
 * Component that renders the language list item.
 *
 * @returns {React$Element<any>}
 */
const LanguageListItem = ({ t, lang, selected, onLanguageSelected }) => {
    const { classes: styles } = useStyles();
    const onLanguageSelectedWrapper = (0, react_1.useCallback)(() => onLanguageSelected(lang), [lang]);
    return (react_1.default.createElement("div", { className: `${styles.itemContainer} ${selected ? styles.activeItemContainer : ''}`, onClick: onLanguageSelectedWrapper },
        react_1.default.createElement("span", { className: styles.iconWrapper }, selected
            && react_1.default.createElement(Icon_1.default, { src: svg_1.IconCheck })),
        t(lang)));
};
exports.default = (0, functions_1.translate)(LanguageListItem);

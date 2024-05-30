"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const utils_1 = require("../../../environment/utils");
const functions_web_1 = require("../../../styles/functions.web");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        container: {
            display: 'flex'
        },
        tab: {
            ...(0, functions_web_1.withPixelLineHeight)(theme.typography.bodyShortBold),
            color: theme.palette.text02,
            flex: 1,
            padding: '14px',
            background: 'none',
            border: 0,
            appearance: 'none',
            borderBottom: `2px solid ${theme.palette.ui05}`,
            transition: 'color, border-color 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 0,
            '&:hover': {
                color: theme.palette.text01,
                borderColor: theme.palette.ui10
            },
            '&.focus-visible': {
                outline: 0,
                boxShadow: `0px 0px 0px 2px ${theme.palette.focus01}`,
                border: 0,
                color: theme.palette.text01
            },
            '&.selected': {
                color: theme.palette.text01,
                borderColor: theme.palette.action01
            },
            '&:disabled': {
                color: theme.palette.text03,
                borderColor: theme.palette.ui05
            },
            '&.is-mobile': {
                ...(0, functions_web_1.withPixelLineHeight)(theme.typography.bodyShortBoldLarge)
            }
        },
        badge: {
            ...(0, functions_web_1.withPixelLineHeight)(theme.typography.labelBold),
            color: theme.palette.text04,
            padding: `0 ${theme.spacing(1)}`,
            borderRadius: '100%',
            backgroundColor: theme.palette.warning01,
            marginLeft: theme.spacing(2)
        }
    };
});
const Tabs = ({ accessibilityLabel, className, onChange, selected, tabs }) => {
    const { classes, cx } = useStyles();
    const isMobile = (0, utils_1.isMobileBrowser)();
    const onClick = (0, react_1.useCallback)(id => () => {
        onChange(id);
    }, []);
    const onKeyDown = (0, react_1.useCallback)((index) => (event) => {
        let newIndex = null;
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            newIndex = index === 0 ? tabs.length - 1 : index - 1;
        }
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            newIndex = index === tabs.length - 1 ? 0 : index + 1;
        }
        if (newIndex !== null) {
            onChange(tabs[newIndex].id);
        }
    }, [tabs]);
    (0, react_1.useEffect)(() => {
        // this test is needed to make sure the effect is triggered because of user actually changing tab
        if (document.activeElement?.getAttribute('role') === 'tab') {
            document.querySelector(`#${selected}`)?.focus();
        }
    }, [selected]);
    return (react_1.default.createElement("div", { "aria-label": accessibilityLabel, className: cx(classes.container, className), role: 'tablist' }, tabs.map((tab, index) => (react_1.default.createElement("button", { "aria-controls": tab.controlsId, "aria-label": tab.accessibilityLabel, "aria-selected": selected === tab.id, className: cx(classes.tab, selected === tab.id && 'selected', isMobile && 'is-mobile'), disabled: tab.disabled, id: tab.id, key: tab.id, onClick: onClick(tab.id), onKeyDown: onKeyDown(index), role: 'tab', tabIndex: selected === tab.id ? undefined : -1 },
        tab.label,
        tab.countBadge && react_1.default.createElement("span", { className: classes.badge }, tab.countBadge))))));
};
exports.default = Tabs;

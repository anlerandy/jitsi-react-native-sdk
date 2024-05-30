"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const utils_1 = require("../../../environment/utils");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        container: {
            position: 'relative',
            backgroundColor: theme.palette.ui05,
            borderRadius: '12px',
            width: '40px',
            height: '24px',
            border: 0,
            outline: 0,
            cursor: 'pointer',
            transition: '.3s',
            display: 'inline-block',
            '&.disabled': {
                backgroundColor: theme.palette.ui05,
                cursor: 'default',
                '& .toggle': {
                    backgroundColor: theme.palette.ui03
                }
            },
            '&.is-mobile': {
                height: '32px',
                width: '50px',
                borderRadius: '32px'
            }
        },
        containerOn: {
            backgroundColor: theme.palette.action01
        },
        toggle: {
            width: '16px',
            height: '16px',
            position: 'absolute',
            zIndex: 5,
            top: '4px',
            left: '4px',
            backgroundColor: theme.palette.ui10,
            borderRadius: '100%',
            transition: '.3s',
            '&.is-mobile': {
                width: '24px',
                height: '24px'
            }
        },
        toggleOn: {
            left: '20px',
            '&.is-mobile': {
                left: '22px'
            }
        },
        checkbox: {
            position: 'absolute',
            zIndex: 10,
            cursor: 'pointer',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            '&.focus-visible + .toggle-checkbox-ring': {
                outline: 0,
                boxShadow: `0px 0px 0px 2px ${theme.palette.focus01}`
            }
        },
        checkboxRing: {
            position: 'absolute',
            pointerEvents: 'none',
            zIndex: 6,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            borderRadius: '12px',
            '&.is-mobile': {
                borderRadius: '32px'
            }
        }
    };
});
const Switch = ({ className, id, checked, disabled, onChange }) => {
    const { classes: styles, cx } = useStyles();
    const isMobile = (0, utils_1.isMobileBrowser)();
    const change = (0, react_1.useCallback)((e) => {
        onChange(e.target.checked);
    }, []);
    return (react_1.default.createElement("span", { className: cx('toggle-container', styles.container, checked && styles.containerOn, isMobile && 'is-mobile', disabled && 'disabled', className) },
        react_1.default.createElement("input", { type: 'checkbox', ...(id ? { id } : {}), checked: checked, className: styles.checkbox, disabled: disabled, onChange: change }),
        react_1.default.createElement("div", { className: cx('toggle-checkbox-ring', styles.checkboxRing, isMobile && 'is-mobile') }),
        react_1.default.createElement("div", { className: cx('toggle', styles.toggle, checked && styles.toggleOn, isMobile && 'is-mobile') })));
};
exports.default = Switch;

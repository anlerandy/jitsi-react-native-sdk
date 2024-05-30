"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const actions_1 = require("../../../dialog/actions");
const svg_1 = require("../../../icons/svg");
const functions_web_1 = require("../../../styles/functions.web");
const functions_web_2 = require("../../functions.web");
const BaseDialog_1 = require("./BaseDialog");
const Button_1 = require("./Button");
const ClickableIcon_1 = require("./ClickableIcon");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        header: {
            width: '100%',
            padding: '24px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
        },
        title: {
            color: theme.palette.text01,
            ...(0, functions_web_1.withPixelLineHeight)(theme.typography.heading5),
            margin: 0,
            padding: 0
        },
        content: {
            height: 'auto',
            overflowY: 'auto',
            width: '100%',
            boxSizing: 'border-box',
            padding: '0 24px',
            overflowX: 'hidden',
            minHeight: '40px',
            '@media (max-width: 448px)': {
                height: '100%'
            }
        },
        footer: {
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '24px',
            '& button:last-child': {
                marginLeft: '16px'
            }
        }
    };
});
const Dialog = ({ back = { hidden: true }, cancel = { translationKey: 'dialog.Cancel' }, children, className, description, disableAutoHideOnSubmit = false, disableBackdropClose, hideCloseButton, disableEnter, disableEscape, ok = { translationKey: 'dialog.Ok' }, onCancel, onSubmit, size, testId, title, titleKey }) => {
    const { classes } = useStyles();
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const onClose = (0, react_1.useCallback)(() => {
        dispatch((0, actions_1.hideDialog)());
        onCancel?.();
    }, [onCancel]);
    const submit = (0, react_1.useCallback)(() => {
        if (onSubmit && ((document.activeElement && !(0, functions_web_2.operatesWithEnterKey)(document.activeElement))
            || !document.activeElement)) {
            !disableAutoHideOnSubmit && dispatch((0, actions_1.hideDialog)());
            onSubmit();
        }
    }, [onSubmit]);
    return (react_1.default.createElement(BaseDialog_1.default, { className: className, description: description, disableBackdropClose: disableBackdropClose, disableEnter: disableEnter, disableEscape: disableEscape, onClose: onClose, size: size, submit: submit, testId: testId, title: title, titleKey: titleKey },
        react_1.default.createElement("div", { className: classes.header },
            react_1.default.createElement("h1", { className: classes.title, id: 'dialog-title' }, title ?? t(titleKey ?? '')),
            !hideCloseButton && (react_1.default.createElement(ClickableIcon_1.default, { accessibilityLabel: t('dialog.accessibilityLabel.close'), icon: svg_1.IconCloseLarge, id: 'modal-header-close-button', onClick: onClose }))),
        react_1.default.createElement("div", { className: classes.content, "data-autofocus-inside": 'true' }, children),
        react_1.default.createElement("div", { className: classes.footer, "data-autofocus-inside": 'true' },
            !back.hidden && react_1.default.createElement(Button_1.default, { accessibilityLabel: t(back.translationKey ?? ''), labelKey: back.translationKey, 
                // eslint-disable-next-line react/jsx-handler-names
                onClick: back.onClick, type: 'secondary' }),
            !cancel.hidden && react_1.default.createElement(Button_1.default, { accessibilityLabel: t(cancel.translationKey ?? ''), labelKey: cancel.translationKey, onClick: onClose, type: 'tertiary' }),
            !ok.hidden && react_1.default.createElement(Button_1.default, { accessibilityLabel: t(ok.translationKey ?? ''), disabled: ok.disabled, id: 'modal-dialog-ok-button', isSubmit: true, labelKey: ok.translationKey, ...(!ok.disabled && { onClick: submit }) }))));
};
exports.default = Dialog;

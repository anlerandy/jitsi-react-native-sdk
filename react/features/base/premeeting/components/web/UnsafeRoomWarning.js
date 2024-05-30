"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const functions_web_1 = require("../../../styles/functions.web");
const Checkbox_1 = require("../../../ui/components/web/Checkbox");
const getUnsafeRoomText_web_1 = require("../../../util/getUnsafeRoomText.web");
const actions_web_1 = require("../../actions.web");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        warning: {
            backgroundColor: theme.palette.warning01,
            color: theme.palette.text04,
            ...(0, functions_web_1.withPixelLineHeight)(theme.typography.bodyShortRegular),
            padding: theme.spacing(3),
            borderRadius: theme.shape.borderRadius,
            marginBottom: theme.spacing(3)
        },
        consent: {
            padding: `0 ${theme.spacing(3)}`,
            '@media (max-width: 720px)': {
                marginBottom: theme.spacing(3)
            }
        }
    };
});
const UnsafeRoomWarning = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { classes } = useStyles();
    const dispatch = (0, react_redux_1.useDispatch)();
    const { unsafeRoomConsent } = (0, react_redux_1.useSelector)((state) => state['features/base/premeeting']);
    const toggleConsent = (0, react_1.useCallback)(() => dispatch((0, actions_web_1.setUnsafeRoomConsent)(!unsafeRoomConsent)), [unsafeRoomConsent, dispatch]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: classes.warning }, (0, getUnsafeRoomText_web_1.default)(t, 'prejoin')),
        react_1.default.createElement(Checkbox_1.default, { checked: unsafeRoomConsent, className: classes.consent, label: t('prejoin.unsafeRoomConsent'), onChange: toggleConsent })));
};
exports.default = UnsafeRoomWarning;

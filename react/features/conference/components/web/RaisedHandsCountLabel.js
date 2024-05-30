"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const svg_1 = require("../../../base/icons/svg");
const Label_1 = require("../../../base/label/components/web/Label");
const Tooltip_1 = require("../../../base/tooltip/components/Tooltip");
const actions_web_1 = require("../../../participants-pane/actions.web");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        label: {
            backgroundColor: theme.palette.warning02,
            color: theme.palette.uiBackground
        }
    };
});
const RaisedHandsCountLabel = () => {
    const { classes: styles, theme } = useStyles();
    const dispatch = (0, react_redux_1.useDispatch)();
    const raisedHandsCount = (0, react_redux_1.useSelector)((state) => (state['features/base/participants'].raisedHandsQueue || []).length);
    const { t } = (0, react_i18next_1.useTranslation)();
    const onClick = (0, react_1.useCallback)(() => {
        dispatch((0, actions_web_1.open)());
    }, []);
    return raisedHandsCount > 0 ? (react_1.default.createElement(Tooltip_1.default, { content: t('raisedHandsLabel'), position: 'bottom' },
        react_1.default.createElement(Label_1.default, { accessibilityText: t('raisedHandsLabel'), className: styles.label, icon: svg_1.IconRaiseHand, iconColor: theme.palette.icon04, id: 'raisedHandsCountLabel', onClick: onClick, text: `${raisedHandsCount}` }))) : null;
};
exports.default = RaisedHandsCountLabel;

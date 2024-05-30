"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const svg_1 = require("../../../base/icons/svg");
const Label_1 = __importDefault(require("../../../base/label/components/web/Label"));
const Tooltip_1 = __importDefault(require("../../../base/tooltip/components/Tooltip"));
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

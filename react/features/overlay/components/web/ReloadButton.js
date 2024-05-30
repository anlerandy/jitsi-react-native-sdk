"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const actions_web_1 = require("../../../app/actions.web");
const Button_1 = require("../../../base/ui/components/web/Button");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        button: {
            margin: `${theme.spacing(2)} auto 0`
        }
    };
});
const ReloadButton = ({ textKey }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const { classes } = useStyles();
    const onClick = (0, react_1.useCallback)(() => {
        dispatch((0, actions_web_1.reloadNow)());
    }, []);
    return (react_1.default.createElement(Button_1.default, { className: classes.button, labelKey: textKey, onClick: onClick }));
};
exports.default = ReloadButton;

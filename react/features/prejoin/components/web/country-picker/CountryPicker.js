"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const Popover_web_1 = require("../../../../base/popover/components/Popover.web");
const functions_web_1 = require("../../../../base/styles/functions.web");
const actions_web_1 = require("../../../actions.web");
const functions_1 = require("../../../functions");
const utils_1 = require("../../../utils");
const CountryDropdown_1 = require("./CountryDropdown");
const CountrySelector_1 = require("./CountrySelector");
const PREFIX_REG = /^(00)|\+/;
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        container: {
            border: 0,
            borderRadius: theme.shape.borderRadius,
            display: 'flex',
            backgroundColor: theme.palette.ui03
        },
        input: {
            padding: '0 4px',
            margin: 0,
            border: 0,
            background: 'transparent',
            color: theme.palette.text01,
            flexGrow: 1,
            ...(0, functions_web_1.withPixelLineHeight)(theme.typography.bodyShortRegular)
        }
    };
});
const CountryPicker = (props) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const inputRef = (0, react_1.useRef)(null);
    const { classes } = useStyles();
    (0, react_1.useEffect)(() => {
        inputRef.current?.focus();
    }, []);
    const onChange = ({ target: { value: newValue } }) => {
        if (PREFIX_REG.test(newValue)) {
            const textWithDialCode = newValue.replace(PREFIX_REG, '');
            if (textWithDialCode.length >= 4) {
                const country = (0, utils_1.getCountryFromDialCodeText)(textWithDialCode);
                if (country) {
                    const rest = textWithDialCode.replace(country.dialCode, '');
                    props.setDialOutCountry(country);
                    props.setDialOutNumber(rest);
                    return;
                }
            }
        }
        props.setDialOutNumber(newValue);
    };
    const onCountrySelectorClick = () => {
        setIsOpen(open => !open);
    };
    const onDropdownClose = () => {
        setIsOpen(false);
    };
    const onEntryClick = (country) => {
        props.setDialOutCountry(country);
        onDropdownClose();
    };
    const onKeyPress = (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            props.onSubmit();
        }
    };
    return (
    /* eslint-disable react/jsx-no-bind */
    react_1.default.createElement(Popover_web_1.default, { content: react_1.default.createElement(CountryDropdown_1.default, { onEntryClick: onEntryClick }), onPopoverClose: onDropdownClose, position: 'bottom', trigger: 'click', visible: isOpen },
        react_1.default.createElement("div", { className: classes.container },
            react_1.default.createElement(CountrySelector_1.default, { country: props.dialOutCountry, onClick: onCountrySelectorClick }),
            react_1.default.createElement("input", { className: classes.input, onChange: onChange, onKeyPress: onKeyPress, ref: inputRef, value: props.dialOutNumber }))));
};
/**
 * Maps (parts of) the redux state to the React {@code Component} props.
 *
 * @param {Object} state - The redux state.
 * @returns {IProps}
 */
function mapStateToProps(state) {
    return {
        dialOutCountry: (0, functions_1.getDialOutCountry)(state),
        dialOutNumber: (0, functions_1.getDialOutNumber)(state)
    };
}
/**
 * Maps redux actions to the props of the component.
 *
 * @type {{
 *     setDialOutCountry: Function,
 *     setDialOutNumber: Function
 * }}
 */
const mapDispatchToProps = {
    setDialOutCountry: actions_web_1.setDialOutCountry,
    setDialOutNumber: actions_web_1.setDialOutNumber
};
exports.default = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(CountryPicker);

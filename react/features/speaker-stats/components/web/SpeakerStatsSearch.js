"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const Icon_1 = require("../../../base/icons/components/Icon");
const svg_1 = require("../../../base/icons/svg");
const functions_1 = require("../../../base/react/functions");
const functions_web_1 = require("../../../base/styles/functions.web");
const constants_1 = require("../../constants");
const functions_2 = require("../../functions");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        speakerStatsSearchContainer: {
            position: 'relative'
        },
        searchIcon: {
            display: 'none',
            [theme.breakpoints.down(constants_1.MOBILE_BREAKPOINT)]: {
                display: 'block',
                position: 'absolute',
                color: theme.palette.text03,
                left: 16,
                top: 13,
                width: 20,
                height: 20
            }
        },
        speakerStatsSearch: {
            backgroundColor: theme.palette.field01,
            border: '1px solid',
            borderRadius: 6,
            borderColor: theme.palette.ui05,
            color: theme.palette.text01,
            padding: '10px 16px',
            width: '100%',
            height: 40,
            '&::placeholder': {
                color: theme.palette.text03,
                ...(0, functions_web_1.withPixelLineHeight)(theme.typography.bodyShortRegular)
            },
            [theme.breakpoints.down(constants_1.MOBILE_BREAKPOINT)]: {
                height: 48,
                padding: '13px 16px 13px 44px',
                '&::placeholder': {
                    ...(0, functions_web_1.withPixelLineHeight)(theme.typography.bodyShortRegular)
                }
            }
        }
    };
});
/**
 * React component for display an individual user's speaker stats.
 *
 * @returns {React$Element<any>}
 */
function SpeakerStatsSearch({ onSearch }) {
    const { classes, theme } = useStyles();
    const { t } = (0, react_i18next_1.useTranslation)();
    const disableSpeakerStatsSearch = (0, react_redux_1.useSelector)(functions_2.isSpeakerStatsSearchDisabled);
    const [searchValue, setSearchValue] = (0, react_1.useState)('');
    /**
     * Callback for the onChange event of the field.
     *
     * @param {Object} evt - The static event.
     * @returns {void}
     */
    const onChange = (0, react_1.useCallback)((evt) => {
        const value = (0, functions_1.getFieldValue)(evt);
        setSearchValue(value);
        onSearch?.(value);
    }, []);
    const preventDismiss = (0, react_1.useCallback)((evt) => {
        if (evt.key === 'Enter') {
            evt.preventDefault();
        }
    }, []);
    if (disableSpeakerStatsSearch) {
        return null;
    }
    return (react_1.default.createElement("div", { className: classes.speakerStatsSearchContainer },
        react_1.default.createElement(Icon_1.default, { className: classes.searchIcon, color: theme.palette.icon03, src: svg_1.IconSearch }),
        react_1.default.createElement("input", { "aria-label": t('speakerStats.searchHint'), autoComplete: 'off', autoFocus: false, className: classes.speakerStatsSearch, id: 'speaker-stats-search', name: 'speakerStatsSearch', onChange: onChange, onKeyPress: preventDismiss, placeholder: t('speakerStats.search'), tabIndex: 0, value: searchValue })));
}
exports.default = SpeakerStatsSearch;

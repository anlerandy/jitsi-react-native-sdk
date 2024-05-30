"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = require("i18next");
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const functions_1 = require("../../../base/i18n/functions");
const Dialog_1 = require("../../../base/ui/components/web/Dialog");
const actions_web_1 = require("../../../settings/actions.web");
const constants_1 = require("../../../settings/constants");
const actions_web_2 = require("../../actions.web");
const AbstractLanguageSelectorDialog_1 = require("../AbstractLanguageSelectorDialog");
const LanguageList_1 = require("./LanguageList");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        paragraphWrapper: {
            fontSize: 14,
            margin: '10px 0px',
            color: theme.palette.text01
        },
        spanWrapper: {
            fontWeight: 700,
            cursor: 'pointer',
            color: theme.palette.link01,
            '&:hover': {
                backgroundColor: theme.palette.ui04,
                color: theme.palette.link01Hover
            }
        }
    };
});
const LanguageSelectorDialog = (props) => {
    const { dispatch, language, listItems, onLanguageSelected, subtitles, t } = props;
    const { classes: styles } = useStyles();
    const onSelected = (0, react_1.useCallback)((e) => {
        onLanguageSelected(e);
        dispatch((0, actions_web_2.toggleLanguageSelectorDialog)());
    }, [language]);
    const onSourceLanguageClick = (0, react_1.useCallback)(() => {
        dispatch((0, actions_web_1.openSettingsDialog)(constants_1.SETTINGS_TABS.MORE, false));
    }, []);
    return (react_1.default.createElement(Dialog_1.default, { cancel: { hidden: true }, ok: { hidden: true }, titleKey: 'transcribing.subtitles' },
        react_1.default.createElement("p", { className: styles.paragraphWrapper },
            (0, functions_1.translateToHTML)(t, 'transcribing.sourceLanguageDesc', {
                'sourceLanguage': t(`languages:${i18next_1.default.language}`).toLowerCase()
            }),
            react_1.default.createElement("span", { className: styles.spanWrapper, onClick: onSourceLanguageClick },
                t('transcribing.sourceLanguageHere'),
                ".")),
        react_1.default.createElement(LanguageList_1.default, { items: listItems, onLanguageSelected: onSelected, selectedLanguage: subtitles })));
};
/*
 * We apply AbstractLanguageSelector to fill in the AbstractProps common
 * to both the web and native implementations.
 */
// eslint-disable-next-line new-cap
exports.default = (0, functions_1.translate)((0, AbstractLanguageSelectorDialog_1.default)(LanguageSelectorDialog));

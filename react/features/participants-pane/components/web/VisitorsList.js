"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const functions_web_1 = require("../../../base/styles/functions.web");
const actions_1 = require("../../../visitors/actions");
const functions_1 = require("../../../visitors/functions");
const VisitorsItem_1 = require("./VisitorsItem");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        container: {
            margin: `${theme.spacing(3)} 0`
        },
        headingW: {
            color: theme.palette.warning02
        },
        drawerActions: {
            listStyleType: 'none',
            margin: 0,
            padding: 0
        },
        drawerItem: {
            alignItems: 'center',
            color: theme.palette.text01,
            display: 'flex',
            padding: '12px 16px',
            ...(0, functions_web_1.withPixelLineHeight)(theme.typography.bodyShortRegularLarge),
            '&:first-child': {
                marginTop: '15px'
            },
            '&:hover': {
                cursor: 'pointer',
                background: theme.palette.action02
            }
        },
        icon: {
            marginRight: 16
        },
        headingContainer: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between'
        },
        heading: {
            ...(0, functions_web_1.withPixelLineHeight)(theme.typography.bodyShortBold),
            color: theme.palette.text02
        },
        link: {
            ...(0, functions_web_1.withPixelLineHeight)(theme.typography.labelBold),
            color: theme.palette.link01,
            cursor: 'pointer'
        }
    };
});
/**
 * Component used to display a list of visitors waiting for approval to join the main meeting.
 *
 * @returns {ReactNode}
 */
function VisitorsList() {
    const requests = (0, react_redux_1.useSelector)(functions_1.getPromotionRequests);
    const visitorsCount = (0, react_redux_1.useSelector)((state) => state['features/visitors'].count || 0);
    const { t } = (0, react_i18next_1.useTranslation)();
    const { classes, cx } = useStyles();
    const dispatch = (0, react_redux_1.useDispatch)();
    const admitAll = (0, react_1.useCallback)(() => {
        dispatch((0, actions_1.admitMultiple)(requests));
    }, [dispatch, requests]);
    if (visitorsCount <= 0) {
        return null;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: classes.headingContainer },
            react_1.default.createElement("div", { className: cx(classes.heading, classes.headingW) },
                t('participantsPane.headings.visitors', { count: visitorsCount }),
                requests.length > 0
                    && t('participantsPane.headings.visitorRequests', { count: requests.length })),
            requests.length > 1
                && react_1.default.createElement("div", { className: classes.link, onClick: admitAll }, t('participantsPane.actions.admitAll'))),
        react_1.default.createElement("div", { className: classes.container, id: 'visitor-list' }, requests.map(r => (react_1.default.createElement(VisitorsItem_1.VisitorsItem, { key: r.from, request: r }))))));
}
exports.default = VisitorsList;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const AnalyticsEvents_1 = require("../../../analytics/AnalyticsEvents");
const functions_1 = require("../../../analytics/functions");
const actions_1 = require("../../../base/dialog/actions");
const svg_1 = require("../../../base/icons/svg");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const types_1 = require("../../../toolbox/types");
const MuteEveryonesVideoDialog_1 = require("./MuteEveryonesVideoDialog");
/**
 * Implements a React {@link Component} which displays a button for audio muting
 * every participant in the conference except the one with the given
 * participantID.
 *
 * @returns {JSX.Element}
 */
const MuteEveryoneElsesVideoButton = ({ notifyClick, notifyMode, participantID }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleClick = (0, react_1.useCallback)(() => {
        notifyClick?.();
        if (notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY) {
            return;
        }
        (0, functions_1.sendAnalytics)((0, AnalyticsEvents_1.createToolbarEvent)('mute.everyoneelsesvideo.pressed'));
        dispatch((0, actions_1.openDialog)(MuteEveryonesVideoDialog_1.default, { exclude: [participantID] }));
    }, [notifyClick, notifyMode, participantID]);
    return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: t('toolbar.accessibilityLabel.muteEveryoneElsesVideoStream'), icon: svg_1.IconVideoOff, onClick: handleClick, text: t('videothumbnail.domuteVideoOfOthers') }));
};
exports.default = MuteEveryoneElsesVideoButton;

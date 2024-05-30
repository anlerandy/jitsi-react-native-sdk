"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const ReactionButton_1 = require("../../../reactions/components/web/ReactionButton");
const types_1 = require("../../../reactions/types");
const actions_1 = require("../../actions");
const functions_web_1 = require("../../functions.web");
const GifsMenuButton = ({ parent }) => {
    const menuOpen = (0, react_redux_1.useSelector)(functions_web_1.isGifsMenuOpen);
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const icon = (react_1.default.createElement("img", { alt: 'GIPHY Logo', height: parent === types_1.IReactionsMenuParent.OverflowMenu ? 16 : 24, src: 'images/GIPHY_icon.png' }));
    const handleClick = (0, react_1.useCallback)(() => {
        dispatch((0, actions_1.setGifMenuVisibility)(!menuOpen));
    }, [menuOpen, parent]);
    return (react_1.default.createElement(ReactionButton_1.default, { accessibilityLabel: t('toolbar.accessibilityLabel.giphy'), icon: icon, key: 'gif', onClick: handleClick, toggled: true, tooltip: t('toolbar.accessibilityLabel.giphy') }));
};
exports.default = GifsMenuButton;

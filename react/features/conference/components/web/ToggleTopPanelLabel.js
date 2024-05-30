"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_redux_1 = require("react-redux");
const index_1 = require("../../../base/icons/svg/index");
const Label_1 = require("../../../base/label/components/web/Label");
const Tooltip_1 = require("../../../base/tooltip/components/Tooltip");
const actions_web_1 = require("../../../filmstrip/actions.web");
const ToggleTopPanelLabel = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const topPanelHidden = !(0, react_redux_1.useSelector)((state) => state['features/filmstrip'].topPanelVisible);
    const onClick = (0, react_1.useCallback)(() => {
        dispatch((0, actions_web_1.setTopPanelVisible)(true));
    }, []);
    return topPanelHidden ? (react_1.default.createElement(Tooltip_1.default, { content: t('toggleTopPanelLabel'), position: 'bottom' },
        react_1.default.createElement(Label_1.default, { icon: index_1.IconArrowDown, onClick: onClick }))) : null;
};
exports.default = ToggleTopPanelLabel;

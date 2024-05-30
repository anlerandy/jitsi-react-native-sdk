"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const functions_1 = require("../../../base/i18n/functions");
const Dialog_1 = require("../../../base/ui/components/web/Dialog");
const openURLInBrowser_web_1 = require("../../../base/util/openURLInBrowser.web");
const constants_1 = require("../../constants");
/**
 * Component that renders the premium feature dialog.
 *
 * @returns {React$Element<any>}
 */
class PremiumFeatureDialog extends react_1.PureComponent {
    /**
     * Instantiates a new component.
     *
     * @inheritdoc
     */
    constructor(props) {
        super(props);
        this._onSubmitValue = this._onSubmitValue.bind(this);
    }
    /**
     * Callback to be invoked when the dialog ok is pressed.
     *
     * @returns {boolean}
     */
    _onSubmitValue() {
        (0, openURLInBrowser_web_1.openURLInBrowser)(constants_1.JAAS_UPGRADE_URL, true);
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     */
    render() {
        const { t } = this.props;
        return (react_1.default.createElement(Dialog_1.default, { cancel: { hidden: true }, ok: { translationKey: 'dialog.viewUpgradeOptions' }, onSubmit: this._onSubmitValue, titleKey: t('dialog.viewUpgradeOptionsTitle') },
            react_1.default.createElement("span", null, t('dialog.viewUpgradeOptionsContent'))));
    }
}
exports.default = (0, functions_1.translate)(PremiumFeatureDialog);

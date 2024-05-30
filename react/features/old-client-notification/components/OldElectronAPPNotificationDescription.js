"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OldElectronAPPNotificationDescription = void 0;
const react_1 = require("react");
const functions_1 = require("../../base/i18n/functions");
/**
 * A component that renders the description of the notification for old Jitsi Meet Electron clients.
 *
 * @augments AbstractApp
 */
class OldElectronAPPNotificationDescription extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { t } = this.props;
        return (react_1.default.createElement("div", null,
            t('notify.oldElectronClientDescription1'),
            react_1.default.createElement("a", { href: 'https://github.com/jitsi/jitsi-meet-electron/releases/latest', rel: 'noopener noreferrer', target: '_blank' }, t('notify.oldElectronClientDescription2')),
            t('notify.oldElectronClientDescription3')));
    }
}
exports.OldElectronAPPNotificationDescription = OldElectronAPPNotificationDescription;
exports.default = (0, functions_1.translate)(OldElectronAPPNotificationDescription);

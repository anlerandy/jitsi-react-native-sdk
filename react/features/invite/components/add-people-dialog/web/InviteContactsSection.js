"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const InviteContactsForm_1 = require("./InviteContactsForm");
/**
 * Component that represents the invitation section of the {@code AddPeopleDialog}.
 *
 * @returns {ReactElement$<any>}
 */
function InviteContactsSection() {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", null, t('addPeople.addContacts')),
        react_1.default.createElement(InviteContactsForm_1.default, null),
        react_1.default.createElement("div", { className: 'invite-more-dialog separator' })));
}
exports.default = InviteContactsSection;

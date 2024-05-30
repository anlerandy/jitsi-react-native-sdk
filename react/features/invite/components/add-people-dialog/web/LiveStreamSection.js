"use strict";
/* eslint-disable react/jsx-no-bind */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const functions_1 = require("../../../../base/i18n/functions");
const Icon_1 = require("../../../../base/icons/components/Icon");
const svg_1 = require("../../../../base/icons/svg");
const copyText_web_1 = require("../../../../base/util/copyText.web");
/**
 * Section of the {@code AddPeopleDialog} that renders the
 * live streaming url, allowing a copy action.
 *
 * @returns {React$Element<any>}
 */
function LiveStreamSection({ liveStreamViewURL, t }) {
    const [isClicked, setIsClicked] = (0, react_1.useState)(false);
    const [isHovered, setIsHovered] = (0, react_1.useState)(false);
    /**
     * Click handler for the element.
     *
     * @returns {void}
     */
    async function onClick() {
        setIsHovered(false);
        const isCopied = await (0, copyText_web_1.copyText)(liveStreamViewURL);
        if (isCopied) {
            setIsClicked(true);
            setTimeout(() => {
                setIsClicked(false);
            }, 2500);
        }
    }
    /**
     * Hover handler for the element.
     *
     * @returns {void}
     */
    function onHoverIn() {
        if (!isClicked) {
            setIsHovered(true);
        }
    }
    /**
     * Hover handler for the element.
     *
     * @returns {void}
     */
    function onHoverOut() {
        setIsHovered(false);
    }
    /**
     * Renders the content of the link based on the state.
     *
     * @returns {React$Element<any>}
     */
    function renderLinkContent() {
        if (isClicked) {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: 'invite-more-dialog stream-text selected' }, t('addPeople.linkCopied')),
                react_1.default.createElement(Icon_1.default, { src: svg_1.IconCheck })));
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: 'invite-more-dialog stream-text' }, isHovered ? t('addPeople.copyStream') : liveStreamViewURL),
            react_1.default.createElement(Icon_1.default, { src: svg_1.IconCopy })));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", null, t('addPeople.shareStream')),
        react_1.default.createElement("div", { className: `invite-more-dialog stream${isClicked ? ' clicked' : ''}`, onClick: onClick, onMouseOut: onHoverOut, onMouseOver: onHoverIn }, renderLinkContent()),
        react_1.default.createElement("div", { className: 'invite-more-dialog separator' })));
}
exports.default = (0, functions_1.translate)(LiveStreamSection);

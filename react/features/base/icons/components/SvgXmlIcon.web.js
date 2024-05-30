"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * SVG rendering component.
 *
 * @returns {JSX.Element}
 */
const SvgXmlIcon = ({ src, ...rest }) => {
    const svgDocument = new DOMParser().parseFromString(src, 'image/svg+xml');
    const element = svgDocument.documentElement.outerHTML;
    const attributes = (0, react_1.useMemo)(() => Object.entries(rest).map(([key, value]) => `${key}="${value}"`)
        .join(' '), [rest]);
    const html = element.replace('<svg', `<svg ${attributes}`);
    return (react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: html }, ...rest }));
};
exports.default = SvgXmlIcon;

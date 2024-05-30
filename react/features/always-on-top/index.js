"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const AlwaysOnTop_1 = require("./AlwaysOnTop");
// Render the main/root Component.
react_dom_1.default.render(react_1.default.createElement(AlwaysOnTop_1.default, null), document.getElementById('react'));
window.addEventListener('beforeunload', () => react_dom_1.default.unmountComponentAtNode(document.getElementById('react') ?? document.body));

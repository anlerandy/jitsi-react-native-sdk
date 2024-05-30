"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * Implements a React {@link Component} for the frame of the overlays.
 */
class OverlayFrame extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement|null}
     */
    render() {
        return (react_1.default.createElement("div", { className: this.props.isLightOverlay ? 'overlay__container-light' : 'overlay__container', id: 'overlay', style: this.props.style },
            react_1.default.createElement("div", { className: 'overlay__content' }, this.props.children)));
    }
}
exports.default = OverlayFrame;

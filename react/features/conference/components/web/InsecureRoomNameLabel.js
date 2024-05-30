"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../base/i18n/functions");
const svg_1 = require("../../../base/icons/svg");
const Label_1 = require("../../../base/label/components/web/Label");
const constants_1 = require("../../../base/label/constants");
const Tooltip_1 = require("../../../base/tooltip/components/Tooltip");
const getUnsafeRoomText_web_1 = require("../../../base/util/getUnsafeRoomText.web");
const AbstractInsecureRoomNameLabel_1 = require("../AbstractInsecureRoomNameLabel");
/**
 * Renders a label indicating that we are in a room with an insecure name.
 */
class InsecureRoomNameLabel extends AbstractInsecureRoomNameLabel_1.default {
    /**
     * Renders the platform dependent content.
     *
     * @inheritdoc
     */
    _render() {
        return (react_1.default.createElement(Tooltip_1.default, { content: (0, getUnsafeRoomText_web_1.default)(this.props.t, 'meeting'), position: 'bottom' },
            react_1.default.createElement(Label_1.default, { color: constants_1.COLORS.red, icon: svg_1.IconExclamationTriangle })));
    }
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(AbstractInsecureRoomNameLabel_1._mapStateToProps)(InsecureRoomNameLabel));

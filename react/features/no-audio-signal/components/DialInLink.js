"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const functions_1 = require("../../base/i18n/functions");
const functions_2 = require("../../invite/functions");
/**
 * React {@code Component} responsible for displaying a telephone number and
 * conference ID for dialing into a conference.
 *
 * @augments Component
 */
class DialInLink extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { _dialIn, _dialInfoPageUrl, t } = this.props;
        if (!(0, functions_2.shouldDisplayDialIn)(_dialIn)) {
            return null;
        }
        return (react_1.default.createElement("div", null,
            t('toolbar.noAudioSignalDialInDesc'),
            "\u00A0",
            react_1.default.createElement("a", { href: _dialInfoPageUrl, rel: 'noopener noreferrer', target: '_blank' }, t('toolbar.noAudioSignalDialInLinkDesc'))));
    }
}
/**
 * Maps (parts of) the Redux state to the associated props for the
 * {@code DialInLink} component.
 *
 * @param {Object} state - The Redux state.
 * @private
 * @returns {IProps}
 */
function _mapStateToProps(state) {
    return {
        _dialIn: state['features/invite'],
        _dialInfoPageUrl: (0, functions_2.getDialInfoPageURL)(state)
    };
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(_mapStateToProps)(DialInLink));

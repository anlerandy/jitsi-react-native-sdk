"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../base/i18n/functions");
const functions_2 = require("../../base/participants/functions");
const index_1 = require("../../base/react/components/index");
const constants_1 = require("../constants");
const functions_3 = require("../functions");
/**
 * React {@code Component} for displaying the current presence status of a
 * participant.
 *
 * @augments Component
 */
class PresenceLabel extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const text = this._getPresenceText();
        if (text === null) {
            return null;
        }
        const { style, className } = this.props;
        return (react_1.default.createElement(index_1.Text // @ts-ignore
        , { className: className, ...style }, text));
    }
    /**
     * Returns the text associated with the current presence status.
     *
     * @returns {string}
     */
    _getPresenceText() {
        const { _presence, t } = this.props;
        if (!_presence) {
            return null;
        }
        const i18nKey = constants_1.STATUS_TO_I18N_KEY[_presence];
        if (!i18nKey) { // fallback to status value
            return _presence;
        }
        return t(i18nKey);
    }
}
/**
 * The default values for {@code PresenceLabel} component's property types.
 *
 * @static
 */
PresenceLabel.defaultProps = {
    _presence: ''
};
/**
 * Maps (parts of) the Redux state to the associated {@code PresenceLabel}'s
 * props.
 *
 * @param {Object} state - The Redux state.
 * @param {Object} ownProps - The React Component props passed to the associated
 * instance of {@code PresenceLabel}.
 * @private
 * @returns {{
 *     _presence: (string|undefined)
 * }}
 */
function _mapStateToProps(state, ownProps) {
    const participant = (0, functions_2.getParticipantById)(state, ownProps.participantID);
    return {
        _presence: (0, functions_3.presenceStatusDisabled)() ? ''
            : participant?.presence || ownProps.defaultPresence
    };
}
exports.default = (0, functions_1.translate)((0, react_redux_1.connect)(_mapStateToProps)(PresenceLabel));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abstractMapStateToProps = exports.AbstractConference = void 0;
const react_1 = require("react");
const components_1 = require("../../notifications/components");
const functions_any_1 = require("../../video-layout/functions.any");
const functions_1 = require("../functions");
/**
 * A container to hold video status labels, including recording status and
 * current large video quality.
 *
 * @augments Component
 */
class AbstractConference extends react_1.Component {
    /**
     * Renders the {@code LocalRecordingLabel}.
     *
     * @param {Object} props - The properties to be passed to
     * the {@code NotificationsContainer}.
     * @protected
     * @returns {React$Element}
     */
    renderNotificationsContainer(props) {
        if (this.props._notificationsVisible) {
            return (react_1.default.createElement(components_1.NotificationsContainer, props));
        }
        return null;
    }
}
exports.AbstractConference = AbstractConference;
/**
 * Maps (parts of) the redux state to the associated props of the {@link Labels}
 * {@code Component}.
 *
 * @param {Object} state - The redux state.
 * @private
 * @returns {AbstractProps}
 */
function abstractMapStateToProps(state) {
    return {
        _notificationsVisible: (0, functions_1.shouldDisplayNotifications)(state),
        _room: state['features/base/conference'].room ?? '',
        _shouldDisplayTileView: (0, functions_any_1.shouldDisplayTileView)(state)
    };
}
exports.abstractMapStateToProps = abstractMapStateToProps;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const AnalyticsEvents_1 = require("../../analytics/AnalyticsEvents");
const functions_1 = require("../../analytics/functions");
const functions_2 = require("../../base/i18n/functions");
const Icon_1 = require("../../base/icons/components/Icon");
const svg_1 = require("../../base/icons/svg");
const Tooltip_1 = require("../../base/tooltip/components/Tooltip");
const actions_web_1 = require("../actions.web");
/**
 * A React Component for adding a meeting URL to an existing calendar event.
 *
 * @augments Component
 */
class AddMeetingUrlButton extends react_1.Component {
    /**
     * Initializes a new {@code AddMeetingUrlButton} instance.
     *
     * @inheritdoc
     */
    constructor(props) {
        super(props);
        // Bind event handler so it is only bound once for every instance.
        this._onClick = this._onClick.bind(this);
        this._onKeyPress = this._onKeyPress.bind(this);
    }
    /**
     * Implements React's {@link Component#render}.
     *
     * @inheritdoc
     */
    render() {
        return (react_1.default.createElement(Tooltip_1.default, { content: this.props.t('calendarSync.addMeetingURL') },
            react_1.default.createElement("div", { className: 'button add-button', onClick: this._onClick, onKeyPress: this._onKeyPress, role: 'button' },
                react_1.default.createElement(Icon_1.default, { src: svg_1.IconPlus }))));
    }
    /**
     * Dispatches an action to adding a meeting URL to a calendar event.
     *
     * @returns {void}
     */
    _onClick() {
        const { calendarId, dispatch, eventId } = this.props;
        (0, functions_1.sendAnalytics)((0, AnalyticsEvents_1.createCalendarClickedEvent)('add.url'));
        dispatch((0, actions_web_1.updateCalendarEvent)(eventId, calendarId));
    }
    /**
     * KeyPress handler for accessibility.
     *
     * @param {Object} e - The key event to handle.
     *
     * @returns {void}
     */
    _onKeyPress(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            this._onClick();
        }
    }
}
exports.default = (0, functions_2.translate)((0, react_redux_1.connect)()(AddMeetingUrlButton));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const functions_1 = require("../../base/i18n/functions");
const Icon_1 = require("../../base/icons/components/Icon");
const svg_1 = require("../../base/icons/svg");
const Tooltip_1 = require("../../base/tooltip/components/Tooltip");
/**
 * A React Component for joining an existing calendar meeting.
 *
 * @augments Component
 */
class JoinButton extends react_1.Component {
    /**
     * Initializes a new {@code JoinButton} instance.
     *
     * @param {*} props - The read-only properties with which the new instance
     * is to be initialized.
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
        const { t } = this.props;
        return (react_1.default.createElement(Tooltip_1.default, { content: t('calendarSync.joinTooltip') },
            react_1.default.createElement("div", { className: 'button join-button', onClick: this._onClick, onKeyPress: this._onKeyPress, role: 'button' },
                react_1.default.createElement(Icon_1.default, { size: '14', src: svg_1.IconPlus }))));
    }
    /**
     * Callback invoked when the component is clicked.
     *
     * @param {Object} event - The DOM click event.
     * @private
     * @returns {void}
     */
    _onClick(event) {
        this.props.onPress(event, this.props.url);
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
exports.default = (0, functions_1.translate)(JoinButton);

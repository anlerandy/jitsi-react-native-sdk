"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// We need to reference these files directly to avoid loading things that are not available
// in this environment (e.g. JitsiMeetJS or interfaceConfig)
const constants_1 = require("../base/icons/svg/constants");
const ToolbarButton_1 = require("./ToolbarButton");
const { api } = window.alwaysOnTop;
/**
 * Stateless hangup button for the Always-on-Top windows.
 */
class HangupButton extends react_1.Component {
    /**
     * Initializes a new {@code HangupButton} instance.
     *
     * @param {IProps} props - The React {@code Component} props to initialize
     * the new {@code HangupButton} instance with.
     */
    constructor(props) {
        super(props);
        this.accessibilityLabel = 'Hangup';
        this.icon = constants_1.DEFAULT_ICON.IconHangup;
        // Bind event handlers so they are only bound once per instance.
        this._onClick = this._onClick.bind(this);
    }
    /**
     * Handles clicking / pressing the button, and disconnects the conference.
     *
     * @protected
     * @returns {void}
     */
    _onClick() {
        api.executeCommand('hangup');
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (react_1.default.createElement(ToolbarButton_1.default, { accessibilityLabel: this.accessibilityLabel, customClass: 'hangup-button', icon: this.icon, onClick: this._onClick }));
    }
}
exports.default = HangupButton;

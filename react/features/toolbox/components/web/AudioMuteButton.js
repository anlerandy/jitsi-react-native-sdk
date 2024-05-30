"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const AnalyticsEvents_1 = require("../../../analytics/AnalyticsEvents");
const functions_1 = require("../../../analytics/functions");
const functions_2 = require("../../../base/i18n/functions");
const types_1 = require("../../../base/media/types");
const AbstractButton_1 = require("../../../base/toolbox/components/AbstractButton");
const Spinner_1 = require("../../../base/ui/components/web/Spinner");
const actions_1 = require("../../../keyboard-shortcuts/actions");
const constants_1 = require("../../constants");
const AbstractAudioMuteButton_1 = require("../AbstractAudioMuteButton");
const styles = () => {
    return {
        pendingContainer: {
            position: 'absolute',
            bottom: '3px',
            right: '3px'
        }
    };
};
/**
 * Component that renders a toolbar button for toggling audio mute.
 *
 * @augments AbstractAudioMuteButton
 */
class AudioMuteButton extends AbstractAudioMuteButton_1.default {
    /**
     * Initializes a new {@code AudioMuteButton} instance.
     *
     * @param {IProps} props - The read-only React {@code Component} props with
     * which the new instance is to be initialized.
     */
    constructor(props) {
        super(props);
        // Bind event handlers so they are only bound once per instance.
        this._onKeyboardShortcut = this._onKeyboardShortcut.bind(this);
        this._getTooltip = this._getLabel;
    }
    /**
     * Registers the keyboard shortcut that toggles the audio muting.
     *
     * @inheritdoc
     * @returns {void}
     */
    componentDidMount() {
        this.props.dispatch((0, actions_1.registerShortcut)({
            character: 'M',
            helpDescription: 'keyboardShortcuts.mute',
            handler: this._onKeyboardShortcut
        }));
    }
    /**
     * Unregisters the keyboard shortcut that toggles the audio muting.
     *
     * @inheritdoc
     * @returns {void}
     */
    componentWillUnmount() {
        this.props.dispatch((0, actions_1.unregisterShortcut)('M'));
    }
    /**
     * Gets the current accessibility label, taking the toggled and GUM pending state into account. If no toggled label
     * is provided, the regular accessibility label will also be used in the toggled state.
     *
     * The accessibility label is not visible in the UI, it is meant to be used by assistive technologies, mainly screen
     * readers.
     *
     * @private
     * @returns {string}
     */
    _getAccessibilityLabel() {
        const { _gumPending } = this.props;
        if (_gumPending === types_1.IGUMPendingState.NONE) {
            return super._getAccessibilityLabel();
        }
        return 'toolbar.accessibilityLabel.muteGUMPending';
    }
    /**
     * Gets the current label, taking the toggled and GUM pending state into account. If no
     * toggled label is provided, the regular label will also be used in the toggled state.
     *
     * @private
     * @returns {string}
     */
    _getLabel() {
        const { _gumPending } = this.props;
        if (_gumPending === types_1.IGUMPendingState.NONE) {
            return super._getLabel();
        }
        return 'toolbar.muteGUMPending';
    }
    /**
     * Indicates if audio is currently muted or not.
     *
     * @override
     * @protected
     * @returns {boolean}
     */
    _isAudioMuted() {
        if (this.props._gumPending === types_1.IGUMPendingState.PENDING_UNMUTE) {
            return false;
        }
        return super._isAudioMuted();
    }
    /**
     * Creates an analytics keyboard shortcut event and dispatches an action to
     * toggle the audio muting.
     *
     * @private
     * @returns {void}
     */
    _onKeyboardShortcut() {
        // Ignore keyboard shortcuts if the audio button is disabled.
        if (this._isDisabled()) {
            return;
        }
        (0, functions_1.sendAnalytics)((0, AnalyticsEvents_1.createShortcutEvent)(AnalyticsEvents_1.AUDIO_MUTE, AnalyticsEvents_1.ACTION_SHORTCUT_TRIGGERED, { enable: !this._isAudioMuted() }));
        AbstractButton_1.default.prototype._onClick.call(this);
    }
    /**
     * Returns a spinner if there is pending GUM.
     *
     * @returns {ReactElement | null}
     */
    _getElementAfter() {
        const { _gumPending } = this.props;
        const classes = mui_1.withStyles.getClasses(this.props);
        return _gumPending === types_1.IGUMPendingState.NONE ? null
            : (react_1.default.createElement("div", { className: classes.pendingContainer },
                react_1.default.createElement(Spinner_1.default, { color: constants_1.SPINNER_COLOR, size: 'small' })));
    }
}
/**
 * Maps (parts of) the redux state to the associated props for the
 * {@code AudioMuteButton} component.
 *
 * @param {Object} state - The Redux state.
 * @private
 * @returns {{
 *     _audioMuted: boolean,
 *     _disabled: boolean
 * }}
 */
function _mapStateToProps(state) {
    const { gumPending } = state['features/base/media'].audio;
    return {
        ...(0, AbstractAudioMuteButton_1.mapStateToProps)(state),
        _gumPending: gumPending
    };
}
exports.default = (0, mui_1.withStyles)((0, functions_2.translate)((0, react_redux_1.connect)(_mapStateToProps)(AudioMuteButton)), styles);

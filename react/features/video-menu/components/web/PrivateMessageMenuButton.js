"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const constants_1 = require("../../../base/flags/constants");
const functions_1 = require("../../../base/flags/functions");
const functions_2 = require("../../../base/i18n/functions");
const svg_1 = require("../../../base/icons/svg");
const functions_3 = require("../../../base/participants/functions");
const ContextMenuItem_1 = require("../../../base/ui/components/web/ContextMenuItem");
const actions_web_1 = require("../../../chat/actions.web");
const functions_web_1 = require("../../../toolbox/functions.web");
const types_1 = require("../../../toolbox/types");
/**
 * A custom implementation of the PrivateMessageButton specialized for
 * the web version of the remote video menu. When the web platform starts to use
 * the {@code AbstractButton} component for the remote video menu, we can get rid
 * of this component and use the generic button in the chat feature.
 */
class PrivateMessageMenuButton extends react_1.Component {
    /**
     * Instantiates a new Component instance.
     *
     * @inheritdoc
     */
    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { _hidden, t } = this.props;
        if (_hidden) {
            return null;
        }
        return (react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: t('toolbar.accessibilityLabel.privateMessage'), icon: svg_1.IconMessage, onClick: this._onClick, text: t('toolbar.privateMessage') }));
    }
    /**
     * Callback to be invoked on pressing the button.
     *
     * @param {React.MouseEvent|undefined} e - The click event.
     * @returns {void}
     */
    _onClick() {
        const { _participant, dispatch, notifyClick, notifyMode } = this.props;
        notifyClick?.();
        if (notifyMode === types_1.NOTIFY_CLICK_MODE.PREVENT_AND_NOTIFY) {
            return;
        }
        dispatch((0, actions_web_1.openChat)(_participant));
    }
}
/**
 * Maps part of the Redux store to the props of this component.
 *
 * @param {Object} state - The Redux state.
 * @param {IProps} ownProps - The own props of the component.
 * @returns {IProps}
 */
function _mapStateToProps(state, ownProps) {
    const enabled = (0, functions_1.getFeatureFlag)(state, constants_1.CHAT_ENABLED, true);
    const { visible = enabled } = ownProps;
    return {
        _participant: (0, functions_3.getParticipantById)(state, ownProps.participantID),
        visible,
        _hidden: typeof interfaceConfig !== 'undefined'
            && (interfaceConfig.DISABLE_PRIVATE_MESSAGES || !(0, functions_web_1.isButtonEnabled)('chat', state))
    };
}
exports.default = (0, functions_2.translate)((0, react_redux_1.connect)(_mapStateToProps)(PrivateMessageMenuButton));

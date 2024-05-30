"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const actions_web_1 = require("../../../../invite/actions.web");
const functions_1 = require("../../../../invite/functions");
const actions_web_2 = require("../../../actions.web");
const functions_2 = require("../../../functions");
const CallingDialog_1 = require("./CallingDialog");
const DialInDialog_1 = require("./DialInDialog");
const DialOutDialog_1 = require("./DialOutDialog");
/**
 * This is the dialog shown when a user wants to join with phone audio.
 */
class JoinByPhoneDialog extends react_1.PureComponent {
    /**
     * Initializes a new {@code JoinByPhoneDialog} instance.
     *
     * @param {IProps} props - The props of the component.
     * @inheritdoc
     */
    constructor(props) {
        super(props);
        this.state = {
            isCalling: false,
            showDialOut: true,
            showDialIn: false
        };
        this._dialOut = this._dialOut.bind(this);
        this._showDialInDialog = this._showDialInDialog.bind(this);
        this._showDialOutDialog = this._showDialOutDialog.bind(this);
    }
    /**
     * Meeting calls the user & shows the 'CallingDialog'.
     *
     * @returns {void}
     */
    _dialOut() {
        const { dialOut, joinConferenceWithoutAudio } = this.props;
        this.setState({
            isCalling: true,
            showDialOut: false,
            showDialIn: false
        });
        dialOut(joinConferenceWithoutAudio, this._showDialOutDialog);
    }
    /**
     * Shows the 'DialInDialog'.
     *
     * @returns {void}
     */
    _showDialInDialog() {
        this.setState({
            isCalling: false,
            showDialOut: false,
            showDialIn: true
        });
    }
    /**
     * Shows the 'DialOutDialog'.
     *
     * @returns {void}
     */
    _showDialOutDialog() {
        this.setState({
            isCalling: false,
            showDialOut: true,
            showDialIn: false
        });
    }
    /**
     * Implements React's {@link Component#componentDidMount()}.
     *
     * @inheritdoc
     */
    componentDidMount() {
        this.props.fetchConferenceDetails();
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { dialOutStatus, dialInNumber, dialOutNumber, joinConferenceWithoutAudio, passCode, onClose, openDialInPage } = this.props;
        const { _dialOut, _showDialInDialog, _showDialOutDialog } = this;
        const { isCalling, showDialOut, showDialIn } = this.state;
        const className = isCalling
            ? 'prejoin-dialog prejoin-dialog--small'
            : 'prejoin-dialog';
        return (react_1.default.createElement("div", { className: 'prejoin-dialog-container' },
            react_1.default.createElement("div", { className: className },
                showDialOut && (react_1.default.createElement(DialOutDialog_1.default, { onClose: onClose, onSubmit: _dialOut, onTextButtonClick: _showDialInDialog })),
                showDialIn && (react_1.default.createElement(DialInDialog_1.default, { number: dialInNumber, onBack: _showDialOutDialog, onPrimaryButtonClick: joinConferenceWithoutAudio, onSmallTextClick: openDialInPage, onTextButtonClick: onClose, passCode: passCode })),
                isCalling && (react_1.default.createElement(CallingDialog_1.default, { number: dialOutNumber, onClose: onClose, status: dialOutStatus })))));
    }
}
/**
 * Maps (parts of) the redux state to the React {@code Component} props.
 *
 * @param {Object} state - The redux state.
 * @param {Object} _ownProps - Component's own props.
 * @returns {Object}
 */
function mapStateToProps(state, _ownProps) {
    return {
        dialInNumber: (0, functions_1.getDefaultDialInNumber)(state),
        dialOutNumber: (0, functions_2.getFullDialOutNumber)(state),
        dialOutStatus: (0, functions_2.getDialOutStatus)(state),
        passCode: (0, functions_1.getConferenceId)(state)
    };
}
const mapDispatchToProps = {
    dialOut: actions_web_2.dialOut,
    fetchConferenceDetails: actions_web_1.updateDialInNumbers,
    joinConferenceWithoutAudio: actions_web_2.joinConferenceWithoutAudio,
    openDialInPage: actions_web_2.openDialInPage
};
exports.default = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(JoinByPhoneDialog);

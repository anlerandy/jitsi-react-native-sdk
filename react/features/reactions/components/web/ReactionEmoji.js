"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const actions_any_1 = require("../../actions.any");
const constants_1 = require("../../constants");
/**
 * Used to display animated reactions.
 *
 * @returns {ReactElement}
 */
class ReactionEmoji extends react_1.Component {
    /**
     * Initializes a new {@code ReactionEmoji} instance.
     *
     * @param {IProps} props - The read-only React {@code Component} props with
     * which the new instance is to be initialized.
     */
    constructor(props) {
        super(props);
        this.state = {
            index: props.index % 21
        };
    }
    /**
     * Implements React Component's componentDidMount.
     *
     * @inheritdoc
     */
    componentDidMount() {
        setTimeout(() => this.props.reactionRemove(this.props.uid), 5000);
    }
    /**
     * Implements React's {@link Component#render}.
     *
     * @inheritdoc
     */
    render() {
        const { reaction, uid } = this.props;
        const { index } = this.state;
        return (react_1.default.createElement("div", { className: `reaction-emoji reaction-${index}`, id: uid }, constants_1.REACTIONS[reaction].emoji));
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        reactionRemove: (uid) => dispatch((0, actions_any_1.removeReaction)(uid))
    };
};
exports.default = (0, react_redux_1.connect)(undefined, mapDispatchToProps)(ReactionEmoji);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Tooltip_1 = require("../../../base/tooltip/components/Tooltip");
/**
 * Represents a button in the reactions menu.
 *
 * @augments AbstractToolbarButton
 */
class ReactionButton extends react_1.Component {
    /**
     * Initializes a new {@code ReactionButton} instance.
     *
     * @inheritdoc
     */
    constructor(props) {
        super(props);
        this._onKeyDown = this._onKeyDown.bind(this);
        this._onClickHandler = this._onClickHandler.bind(this);
        this._onClick = this._onClick.bind(this);
        this.state = {
            increaseLevel: 0,
            increaseTimeout: null
        };
    }
    /**
     * Handles clicking/pressing this {@code AbstractToolbarButton} by
     * forwarding the event to the {@code onClick} prop of this instance if any.
     *
     * @protected
     * @returns {*} The result returned by the invocation of the {@code onClick}
     * prop of this instance if any.
     */
    _onClick(...args) {
        const { onClick } = this.props;
        return onClick?.(...args);
    }
    /**
     * Handles 'Enter' key on the button to trigger onClick for accessibility.
     * We should be handling Space onKeyUp but it conflicts with PTT.
     *
     * @param {Object} event - The key event.
     * @private
     * @returns {void}
     */
    _onKeyDown(event) {
        // If the event coming to the dialog has been subject to preventDefault
        // we don't handle it here.
        if (event.defaultPrevented) {
            return;
        }
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.props.onClick();
        }
    }
    /**
     * Handles reaction button click.
     *
     * @param {Event} event - The click event.
     * @returns {void}
     */
    _onClickHandler(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onClick();
        clearTimeout(this.state.increaseTimeout ?? 0);
        const timeout = window.setTimeout(() => {
            this.setState({
                increaseLevel: 0
            });
        }, 500);
        this.setState(state => {
            return {
                increaseLevel: state.increaseLevel + 1,
                increaseTimeout: timeout
            };
        });
    }
    /**
     * Renders the button of this {@code ReactionButton}.
     *
     * @param {Object} children - The children, if any, to be rendered inside
     * the button. Presumably, contains the emoji of this {@code ReactionButton}.
     * @protected
     * @returns {ReactElement} The button of this {@code ReactionButton}.
     */
    _renderButton(children) {
        return (react_1.default.createElement("div", { "aria-label": this.props.accessibilityLabel, "aria-pressed": this.props.toggled, className: 'toolbox-button', onClick: this._onClickHandler, onKeyDown: this._onKeyDown, role: 'button', tabIndex: 0 }, this.props.tooltip
            ? react_1.default.createElement(Tooltip_1.default, { content: this.props.tooltip, position: this.props.tooltipPosition }, children)
            : children));
    }
    /**
     * Renders the icon (emoji) of this {@code reactionButton}.
     *
     * @inheritdoc
     */
    _renderIcon() {
        const { toggled, icon, label } = this.props;
        const { increaseLevel } = this.state;
        return (react_1.default.createElement("div", { className: `toolbox-icon ${toggled ? 'toggled' : ''}` },
            react_1.default.createElement("span", { className: `emoji increase-${increaseLevel > 12 ? 12 : increaseLevel}` }, icon),
            label && react_1.default.createElement("span", { className: 'text' }, label)));
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return this._renderButton(this._renderIcon());
    }
}
/**
 * Default values for {@code ReactionButton} component's properties.
 *
 * @static
 */
ReactionButton.defaultProps = {
    tooltipPosition: 'top'
};
exports.default = ReactionButton;

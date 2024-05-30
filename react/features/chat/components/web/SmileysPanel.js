"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_emoji_render_1 = require("react-emoji-render");
const Tooltip_1 = require("../../../base/tooltip/components/Tooltip");
const smileys_1 = require("../../smileys");
/**
 * Implements a React Component showing smileys that can be be shown in chat.
 *
 * @augments Component
 */
class SmileysPanel extends react_1.PureComponent {
    /**
     * Initializes a new {@code SmileysPanel} instance.
     *
     * @param {*} props - The read-only properties with which the new instance
     * is to be initialized.
     */
    constructor(props) {
        super(props);
        // Bind event handler so it is only bound once for every instance.
        this._onClick = this._onClick.bind(this);
        this._onKeyPress = this._onKeyPress.bind(this);
        this._onEscKey = this._onEscKey.bind(this);
    }
    /**
     * KeyPress handler for accessibility.
     *
     * @param {Object} e - The key event to handle.
     *
     * @returns {void}
     */
    _onEscKey(e) {
        // Escape handling does not work in onKeyPress
        if (e.key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
            this.props.onSmileySelect();
        }
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
            e.preventDefault(); // @ts-ignore
            this.props.onSmileySelect(e.target.id && smileys_1.smileys[e.target.id]);
        }
    }
    /**
     * Click handler for to select emoji.
     *
     * @param {Object} e - The key event to handle.
     *
     * @returns {void}
     */
    _onClick(e) {
        e.preventDefault();
        this.props.onSmileySelect(e.currentTarget.id && smileys_1.smileys[e.currentTarget.id]);
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const smileyItems = Object.keys(smileys_1.smileys).map(smileyKey => (react_1.default.createElement("div", { className: 'smileyContainer', id: smileyKey, key: smileyKey, onClick: this._onClick, onKeyDown: this._onEscKey, onKeyPress: this._onKeyPress, role: 'option', tabIndex: 0 },
            react_1.default.createElement(Tooltip_1.default, { content: smileys_1.smileys[smileyKey] },
                react_1.default.createElement(react_emoji_render_1.default, { onlyEmojiClassName: 'smiley', text: smileys_1.smileys[smileyKey] })))));
        return (react_1.default.createElement("div", { "aria-orientation": 'horizontal', id: 'smileysContainer', onKeyDown: this._onEscKey, role: 'listbox', tabIndex: -1 }, smileyItems));
    }
}
exports.default = SmileysPanel;

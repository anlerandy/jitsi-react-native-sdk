"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const svg_1 = require("../../../../base/icons/svg");
const Button_1 = require("../../../../base/ui/components/web/Button");
const ContextMenuItem_1 = require("../../../../base/ui/components/web/ContextMenuItem");
const constants_any_1 = require("../../../../base/ui/constants.any");
const logger_1 = require("../../../logger");
const TEST_SOUND_PATH = 'sounds/ring.mp3';
const useStyles = (0, mui_1.makeStyles)()(() => {
    return {
        container: {
            position: 'relative',
            [['&:hover', '&:focus', '&:focus-within']]: {
                '& .entryText': {
                    maxWidth: '178px',
                    marginRight: 0
                },
                '& .testButton': {
                    display: 'inline-block'
                }
            }
        },
        entryText: {
            maxWidth: '238px',
            '&.left-margin': {
                marginLeft: '36px'
            }
        },
        testButton: {
            display: 'none',
            padding: '4px 10px',
            position: 'absolute',
            right: '16px',
            top: '6px'
        }
    };
});
/**
 * Implements a React {@link Component} which displays an audio
 * output settings entry. The user can click and play a test sound.
 *
 * @param {IProps} props - Component props.
 * @returns {JSX.Element}
 */
const SpeakerEntry = (props) => {
    const audioRef = (0, react_1.useRef)(null);
    const { classes, cx } = useStyles();
    /**
     * Click handler for the entry.
     *
     * @returns {void}
     */
    function _onClick() {
        props.onClick(props.deviceId);
    }
    /**
     * Key pressed handler for the entry.
     *
     * @param {Object} e - The event.
     * @private
     *
     * @returns {void}
     */
    function _onKeyPress(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            props.onClick(props.deviceId);
        }
    }
    /**
     * Click handler for Test button.
     * Sets the current audio output id and plays a sound.
     *
     * @param {Object} e - The synthetic event.
     * @returns {void}
     */
    async function _onTestButtonClick(e) {
        e.stopPropagation();
        try {
            await audioRef.current?.setSinkId(props.deviceId);
            audioRef.current?.play();
        }
        catch (err) {
            logger_1.default.log('Could not set sink id', err);
        }
    }
    const { children, isSelected, index, length } = props;
    /* eslint-disable react/jsx-no-bind */
    return (react_1.default.createElement("li", { "aria-checked": isSelected, "aria-posinset": index, "aria-setsize": length, className: classes.container, onClick: _onClick, onKeyPress: _onKeyPress, role: 'radio', tabIndex: 0 },
        react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: children, icon: isSelected ? svg_1.IconCheck : undefined, overflowType: constants_any_1.TEXT_OVERFLOW_TYPES.SCROLL_ON_HOVER, selected: isSelected, text: children, textClassName: cx(classes.entryText, 'entryText', !isSelected && 'left-margin') },
            react_1.default.createElement(Button_1.default, { className: cx(classes.testButton, 'testButton'), label: 'Test', onClick: _onTestButtonClick, onKeyPress: _onTestButtonClick, type: constants_any_1.BUTTON_TYPES.SECONDARY })),
        react_1.default.createElement("audio", { preload: 'auto', ref: audioRef, src: TEST_SOUND_PATH })));
};
exports.default = SpeakerEntry;

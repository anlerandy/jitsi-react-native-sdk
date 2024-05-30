"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const Icon_1 = require("../../../../base/icons/components/Icon");
const svg_1 = require("../../../../base/icons/svg");
const _1 = require("../../../../base/lib-jitsi-meet/_");
const ContextMenuItem_1 = require("../../../../base/ui/components/web/ContextMenuItem");
const constants_any_1 = require("../../../../base/ui/constants.any");
const Meter_1 = require("./Meter");
const JitsiTrackEvents = _1.default.events.track;
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        container: {
            position: 'relative'
        },
        entryText: {
            maxWidth: '238px',
            '&.withMeter': {
                maxWidth: '178px'
            },
            '&.left-margin': {
                marginLeft: '36px'
            }
        },
        icon: {
            borderRadius: '50%',
            display: 'inline-block',
            width: '14px',
            marginLeft: '6px',
            '& svg': {
                fill: theme.palette.iconError
            }
        },
        meter: {
            position: 'absolute',
            right: '16px',
            top: '14px'
        }
    };
});
const MicrophoneEntry = ({ deviceId, children, hasError, index, isSelected, length, jitsiTrack, measureAudioLevels, onClick: propsClick }) => {
    const [level, setLevel] = (0, react_1.useState)(-1);
    const activeTrackRef = (0, react_1.useRef)(jitsiTrack);
    const { classes, cx } = useStyles();
    /**
     * Click handler for the entry.
     *
     * @returns {void}
     */
    const onClick = (0, react_1.useCallback)(() => {
        propsClick(deviceId);
    }, [propsClick, deviceId]);
    /**
     * Key pressed handler for the entry.
     *
     * @param {Object} e - The event.
     * @private
     *
     * @returns {void}
     */
    const onKeyPress = (0, react_1.useCallback)((e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            propsClick(deviceId);
        }
    }, [propsClick, deviceId]);
    /**
     * Updates the level of the meter.
     *
     * @param {number} num - The audio level provided by the jitsiTrack.
     * @returns {void}
     */
    const updateLevel = (0, react_1.useCallback)((num) => {
        setLevel(Math.floor(num / 0.125));
    }, []);
    /**
     * Subscribes to audio level changes coming from the jitsiTrack.
     *
     * @returns {void}
     */
    const startListening = () => {
        jitsiTrack && measureAudioLevels && jitsiTrack.on(JitsiTrackEvents.TRACK_AUDIO_LEVEL_CHANGED, updateLevel);
    };
    /**
     * Unsubscribes from changes coming from the jitsiTrack.
     *
     * @param {Object} track - The jitsiTrack to unsubscribe from.
     * @returns {void}
     */
    const stopListening = (track) => {
        track?.off(JitsiTrackEvents.TRACK_AUDIO_LEVEL_CHANGED, updateLevel);
        setLevel(-1);
    };
    (0, react_1.useEffect)(() => {
        startListening();
        return () => {
            stopListening(jitsiTrack);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        stopListening(activeTrackRef.current);
        startListening();
        activeTrackRef.current = jitsiTrack;
    }, [jitsiTrack]);
    return (react_1.default.createElement("li", { "aria-checked": isSelected, "aria-posinset": index, "aria-setsize": length, className: classes.container, onClick: onClick, onKeyPress: onKeyPress, role: 'radio', tabIndex: 0 },
        react_1.default.createElement(ContextMenuItem_1.default, { accessibilityLabel: children, icon: isSelected ? svg_1.IconCheck : undefined, overflowType: constants_any_1.TEXT_OVERFLOW_TYPES.SCROLL_ON_HOVER, selected: isSelected, text: children, textClassName: cx(classes.entryText, measureAudioLevels && 'withMeter', !isSelected && 'left-margin') }, hasError && react_1.default.createElement(Icon_1.default, { className: classes.icon, size: 16, src: svg_1.IconExclamationSolid })),
        Boolean(jitsiTrack) && measureAudioLevels && react_1.default.createElement(Meter_1.default, { className: classes.meter, isDisabled: hasError, level: level })));
};
exports.default = MicrophoneEntry;

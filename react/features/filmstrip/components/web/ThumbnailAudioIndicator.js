"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const AudioLevelIndicator_1 = require("../../../audio-level-indicator/components/AudioLevelIndicator");
const _1 = require("../../../base/lib-jitsi-meet/_");
const JitsiTrackEvents = _1.default.events.track;
const ThumbnailAudioIndicator = ({ _audioTrack }) => {
    const [audioLevel, setAudioLevel] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        setAudioLevel(0);
        if (_audioTrack) {
            const { jitsiTrack } = _audioTrack;
            jitsiTrack?.on(JitsiTrackEvents.TRACK_AUDIO_LEVEL_CHANGED, setAudioLevel);
        }
        return () => {
            if (_audioTrack) {
                const { jitsiTrack } = _audioTrack;
                jitsiTrack?.off(JitsiTrackEvents.TRACK_AUDIO_LEVEL_CHANGED, setAudioLevel);
            }
        };
    }, [_audioTrack]);
    return (react_1.default.createElement("span", { className: 'audioindicator-container' },
        react_1.default.createElement(AudioLevelIndicator_1.default, { audioLevel: audioLevel })));
};
exports.default = ThumbnailAudioIndicator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionIndicatorIcon = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const mui_1 = require("tss-react/mui");
const Icon_1 = require("../../../base/icons/components/Icon");
const svg_1 = require("../../../base/icons/svg");
const lib_jitsi_meet_1 = require("../../../base/lib-jitsi-meet");
const actions_web_1 = require("../../../base/tracks/actions.web");
const ConnectionIndicatorIcon = ({ classes, colorClass, connectionIndicatorInactiveDisabled, isConnectionStatusInactive, isConnectionStatusInterrupted, track }) => {
    const { cx } = (0, mui_1.useStyles)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const sourceName = track?.jitsiTrack?.getSourceName();
    const handleTrackStreamingStatusChanged = (jitsiTrack, streamingStatus) => {
        dispatch((0, actions_web_1.trackStreamingStatusChanged)(jitsiTrack, streamingStatus));
    };
    // TODO: replace this with a custom hook to be reused where track streaming status is needed.
    // TODO: In the hood the listener should updates a local track streaming status instead of that in redux store.
    (0, react_1.useEffect)(() => {
        if (track && !track.local) {
            track.jitsiTrack.on(lib_jitsi_meet_1.JitsiTrackEvents.TRACK_STREAMING_STATUS_CHANGED, handleTrackStreamingStatusChanged);
            dispatch((0, actions_web_1.trackStreamingStatusChanged)(track.jitsiTrack, track.jitsiTrack.getTrackStreamingStatus?.()));
        }
        return () => {
            if (track && !track.local) {
                track.jitsiTrack.off(lib_jitsi_meet_1.JitsiTrackEvents.TRACK_STREAMING_STATUS_CHANGED, handleTrackStreamingStatusChanged);
                dispatch((0, actions_web_1.trackStreamingStatusChanged)(track.jitsiTrack, track.jitsiTrack.getTrackStreamingStatus?.()));
            }
        };
    }, [sourceName]);
    if (isConnectionStatusInactive) {
        if (connectionIndicatorInactiveDisabled) {
            return null;
        }
        return (react_1.default.createElement("span", { className: 'connection_ninja' },
            react_1.default.createElement(Icon_1.default, { className: cx(classes?.icon, classes?.inactiveIcon, colorClass), size: 24, src: svg_1.IconConnectionInactive })));
    }
    let emptyIconWrapperClassName = 'connection_empty';
    if (isConnectionStatusInterrupted) {
        // emptyIconWrapperClassName is used by the torture tests to identify lost connection status handling.
        emptyIconWrapperClassName = 'connection_lost';
    }
    return (react_1.default.createElement("span", { className: emptyIconWrapperClassName },
        react_1.default.createElement(Icon_1.default, { className: cx(classes?.icon, colorClass), size: 16, src: svg_1.IconConnection })));
};
exports.ConnectionIndicatorIcon = ConnectionIndicatorIcon;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const functions_1 = require("../../../base/i18n/functions");
const functions_2 = require("../../../base/media/functions");
const PreMeetingScreen_1 = require("../../../base/premeeting/components/web/PreMeetingScreen");
const functions_web_1 = require("../../../base/tracks/functions.web");
const functions_3 = require("../../functions");
/**
 * This component is displayed before joining a meeting.
 */
class PrejoinThirdParty extends react_1.Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { className, deviceStatusVisible, showCameraPreview, videoTrack } = this.props;
        return (react_1.default.createElement(PreMeetingScreen_1.default, { className: `prejoin-third-party ${className}`, showDeviceStatus: deviceStatusVisible, skipPrejoinButton: false, thirdParty: true, videoMuted: !showCameraPreview, videoTrack: videoTrack }));
    }
}
/**
 * Maps (parts of) the redux state to the React {@code Component} props.
 *
 * @param {Object} state - The redux state.
 * @param {Object} ownProps - The props passed to the component.
 * @returns {Object}
 */
function mapStateToProps(state) {
    return {
        deviceStatusVisible: (0, functions_3.isDeviceStatusVisible)(state),
        showCameraPreview: !(0, functions_2.isVideoMutedByUser)(state),
        videoTrack: (0, functions_web_1.getLocalJitsiVideoTrack)(state)
    };
}
exports.default = (0, react_redux_1.connect)(mapStateToProps)((0, functions_1.translate)(PrejoinThirdParty));

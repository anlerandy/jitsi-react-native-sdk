"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const constants_1 = require("../../constants");
const AbstractVideoManager_1 = require("./AbstractVideoManager");
/**
 * Manager of shared video.
 */
class VideoManager extends AbstractVideoManager_1.default {
    /**
     * Initializes a new VideoManager instance.
     *
     * @param {Object} props - This component's props.
     *
     * @returns {void}
     */
    constructor(props) {
        super(props);
        this.playerRef = react_1.default.createRef();
    }
    /**
     * Retrieves the current player ref.
     */
    get player() {
        return this.playerRef.current;
    }
    /**
     * Indicates the playback state of the video.
     *
     * @returns {string}
     */
    getPlaybackStatus() {
        let status;
        if (!this.player) {
            return;
        }
        if (this.player.paused) {
            status = constants_1.PLAYBACK_STATUSES.PAUSED;
        }
        else {
            status = constants_1.PLAYBACK_STATUSES.PLAYING;
        }
        return status;
    }
    /**
     * Indicates whether the video is muted.
     *
     * @returns {boolean}
     */
    isMuted() {
        return this.player?.muted;
    }
    /**
     * Retrieves current volume.
     *
     * @returns {number}
     */
    getVolume() {
        return Number(this.player?.volume);
    }
    /**
     * Retrieves current time.
     *
     * @returns {number}
     */
    getTime() {
        return Number(this.player?.currentTime);
    }
    /**
     * Seeks video to provided time.
     *
     * @param {number} time - The time to seek to.
     *
     * @returns {void}
     */
    seek(time) {
        if (this.player) {
            this.player.currentTime = time;
        }
    }
    /**
     * Plays video.
     *
     * @returns {void}
     */
    play() {
        return this.player?.play();
    }
    /**
     * Pauses video.
     *
     * @returns {void}
     */
    pause() {
        return this.player?.pause();
    }
    /**
     * Mutes video.
     *
     * @returns {void}
     */
    mute() {
        if (this.player) {
            this.player.muted = true;
        }
    }
    /**
     * Unmutes video.
     *
     * @returns {void}
     */
    unMute() {
        if (this.player) {
            this.player.muted = false;
        }
    }
    /**
     * Retrieves video tag params.
     *
     * @returns {void}
     */
    getPlayerOptions() {
        const { _isOwner, videoId } = this.props;
        let options = {
            autoPlay: true,
            src: videoId,
            controls: _isOwner,
            onError: () => this.onError(),
            onPlay: () => this.onPlay(),
            onVolumeChange: () => this.onVolumeChange()
        };
        if (_isOwner) {
            options = {
                ...options,
                onPause: () => this.onPause(),
                onTimeUpdate: this.throttledFireUpdateSharedVideoEvent
            };
        }
        return options;
    }
    /**
     * Implements React Component's render.
     *
     * @inheritdoc
     */
    render() {
        return (react_1.default.createElement("video", { id: 'sharedVideoPlayer', ref: this.playerRef, ...this.getPlayerOptions() }));
    }
}
exports.default = (0, react_redux_1.connect)(AbstractVideoManager_1._mapStateToProps, AbstractVideoManager_1._mapDispatchToProps)(VideoManager);

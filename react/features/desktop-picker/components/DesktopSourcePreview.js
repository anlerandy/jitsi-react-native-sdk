"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const functions_1 = require("../../base/i18n/functions");
/**
 * React component for displaying a preview of a DesktopCapturerSource.
 *
 * @augments Component
 */
class DesktopSourcePreview extends react_1.Component {
    /**
     * Initializes a new DesktopSourcePreview instance.
     *
     * @param {Object} props - The read-only properties with which the new
     * instance is to be initialized.
     */
    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
        this._onDoubleClick = this._onDoubleClick.bind(this);
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const selectedClass = this.props.selected ? 'is-selected' : '';
        const displayClasses = `desktop-picker-source ${selectedClass}`;
        return (react_1.default.createElement("div", { className: displayClasses, onClick: this._onClick, onDoubleClick: this._onDoubleClick },
            this._renderThumbnailImageContainer(),
            react_1.default.createElement("div", { className: 'desktop-source-preview-label' }, this.props.source.name)));
    }
    /**
     * Render thumbnail screenshare image.
     *
     * @returns {Object} - Thumbnail image.
     */
    _renderThumbnailImageContainer() {
        // default data URL for thumnbail image
        let srcImage = this.props.source.thumbnail.dataUrl;
        // legacy thumbnail image
        if (typeof this.props.source.thumbnail.toDataURL === 'function') {
            srcImage = this.props.source.thumbnail.toDataURL();
        }
        return (react_1.default.createElement("div", { className: 'desktop-source-preview-image-container' }, this._renderThumbnailImage(srcImage)));
    }
    /**
     * Render thumbnail screenshare image.
     *
     * @param {string} src - Of the image.
     * @returns {Object} - Thumbnail image.
     */
    _renderThumbnailImage(src) {
        return (react_1.default.createElement("img", { alt: this.props.t('welcomepage.logo.desktopPreviewThumbnail'), className: 'desktop-source-preview-thumbnail', src: src }));
    }
    /**
     * Invokes the passed in onClick callback.
     *
     * @returns {void}
     */
    _onClick() {
        const { source, type } = this.props;
        this.props.onClick(source.id, type);
    }
    /**
     * Invokes the passed in onDoubleClick callback.
     *
     * @returns {void}
     */
    _onDoubleClick() {
        const { source, type } = this.props;
        this.props.onDoubleClick(source.id, type);
    }
}
exports.default = (0, functions_1.translate)(DesktopSourcePreview);

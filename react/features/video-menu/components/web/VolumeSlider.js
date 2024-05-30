"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const mui_1 = require("tss-react/mui");
const Icon_1 = require("../../../base/icons/components/Icon");
const svg_1 = require("../../../base/icons/svg");
const constants_1 = require("../../constants");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        container: {
            minHeight: '40px',
            minWidth: '180px',
            width: '100%',
            boxSizing: 'border-box',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '10px 16px',
            '&:hover': {
                backgroundColor: theme.palette.ui02
            }
        },
        icon: {
            minWidth: '20px',
            marginRight: '16px',
            position: 'relative'
        },
        sliderContainer: {
            position: 'relative',
            width: '100%'
        },
        slider: {
            position: 'absolute',
            width: '100%',
            top: '50%',
            transform: 'translate(0, -50%)'
        }
    };
});
const _onClick = (e) => {
    e.stopPropagation();
};
const VolumeSlider = ({ initialValue, onChange }) => {
    const { classes, cx } = useStyles();
    const { t } = (0, react_i18next_1.useTranslation)();
    const [volumeLevel, setVolumeLevel] = (0, react_1.useState)((initialValue || 0) * constants_1.VOLUME_SLIDER_SCALE);
    const _onVolumeChange = (0, react_1.useCallback)((event) => {
        const newVolumeLevel = Number(event.currentTarget.value);
        onChange(newVolumeLevel / constants_1.VOLUME_SLIDER_SCALE);
        setVolumeLevel(newVolumeLevel);
    }, [onChange]);
    return (react_1.default.createElement("div", { "aria-label": t('volumeSlider'), className: cx('popupmenu__contents', classes.container), onClick: _onClick },
        react_1.default.createElement("span", { className: classes.icon },
            react_1.default.createElement(Icon_1.default, { size: 22, src: svg_1.IconVolumeUp })),
        react_1.default.createElement("div", { className: classes.sliderContainer },
            react_1.default.createElement("input", { "aria-valuemax": constants_1.VOLUME_SLIDER_SCALE, "aria-valuemin": 0, "aria-valuenow": volumeLevel, className: cx('popupmenu__volume-slider', classes.slider), max: constants_1.VOLUME_SLIDER_SCALE, min: 0, onChange: _onVolumeChange, tabIndex: 0, type: 'range', value: volumeLevel }))));
};
exports.default = VolumeSlider;

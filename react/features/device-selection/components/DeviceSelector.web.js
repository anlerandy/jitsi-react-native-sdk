"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const mui_1 = require("tss-react/mui");
const functions_web_1 = require("../../base/styles/functions.web");
const Select_1 = require("../../base/ui/components/web/Select");
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        textSelector: {
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.uiBackground,
            padding: '10px 16px',
            textAlign: 'center',
            ...(0, functions_web_1.withPixelLineHeight)(theme.typography.bodyShortRegular),
            border: `1px solid ${theme.palette.ui03}`
        }
    };
});
const DeviceSelector = ({ devices, hasPermission, id, isDisabled, label, onSelect, selectedDeviceId }) => {
    const { classes } = useStyles();
    const { t } = (0, react_i18next_1.useTranslation)();
    const _onSelect = (0, react_1.useCallback)((e) => {
        const deviceId = e.target.value;
        if (selectedDeviceId !== deviceId) {
            onSelect(deviceId);
        }
    }, [selectedDeviceId, onSelect]);
    const _createDropdown = (options) => {
        const triggerText = (options.defaultSelected && (options.defaultSelected.label || options.defaultSelected.deviceId))
            || options.placeholder;
        if (options.isDisabled || !options.items?.length) {
            return (react_1.default.createElement("div", { className: classes.textSelector }, triggerText));
        }
        return (react_1.default.createElement(Select_1.default, { id: id, label: t(label), onChange: _onSelect, options: options.items, value: selectedDeviceId }));
    };
    const _renderNoDevices = () => _createDropdown({
        isDisabled: true,
        placeholder: t('settings.noDevice')
    });
    const _renderNoPermission = () => _createDropdown({
        isDisabled: true,
        placeholder: t('deviceSelection.noPermission')
    });
    if (hasPermission === undefined) {
        return null;
    }
    if (!hasPermission) {
        return _renderNoPermission();
    }
    if (!devices?.length) {
        return _renderNoDevices();
    }
    const items = devices.map(device => {
        return {
            value: device.deviceId,
            label: device.label || device.deviceId
        };
    });
    const defaultSelected = devices.find(item => item.deviceId === selectedDeviceId);
    return _createDropdown({
        defaultSelected,
        isDisabled,
        items,
        placeholder: t('deviceSelection.selectADevice')
    });
};
exports.default = DeviceSelector;

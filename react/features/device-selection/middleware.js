"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionTypes_1 = require("../base/devices/actionTypes");
const MiddlewareRegistry_1 = require("../base/redux/MiddlewareRegistry");
/**
 * Implements the middleware of the feature device-selection.
 *
 * @param {Store} store - Redux store.
 * @returns {Function}
 */
// eslint-disable-next-line no-unused-vars
MiddlewareRegistry_1.default.register(store => next => action => {
    const result = next(action);
    if (action.type === actionTypes_1.UPDATE_DEVICE_LIST) {
        const state = store.getState();
        const { availableDevices } = state['features/base/devices'] || {};
        if (typeof APP !== 'undefined') {
            APP.API.notifyDeviceListChanged(availableDevices);
        }
    }
    return result;
});

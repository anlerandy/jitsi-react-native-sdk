"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionTypes_1 = require("../base/conference/actionTypes");
const actionTypes_2 = require("../base/config/actionTypes");
const MiddlewareRegistry_1 = require("../base/redux/MiddlewareRegistry");
const actions_1 = require("./actions");
const logger_1 = require("./logger");
require("./subscriber");
/**
 * Implements the middleware of the feature video-quality.
 *
 * @param {Store} store - The redux store.
 * @returns {Function}
 */
MiddlewareRegistry_1.default.register(({ dispatch, getState }) => next => action => {
    const result = next(action);
    switch (action.type) {
        case actionTypes_1.CONFERENCE_JOINED: {
            if (navigator.product === 'ReactNative') {
                const { resolution } = getState()['features/base/config'];
                if (typeof resolution !== 'undefined') {
                    dispatch((0, actions_1.setPreferredVideoQuality)(Number.parseInt(`${resolution}`, 10)));
                    logger_1.default.info(`Configured preferred receiver video frame height to: ${resolution}`);
                }
            }
            break;
        }
        case actionTypes_2.SET_CONFIG: {
            const state = getState();
            const { videoQuality = {} } = state['features/base/config'];
            const { persistedPrefferedVideoQuality } = state['features/video-quality-persistent-storage'];
            if (videoQuality.persist && typeof persistedPrefferedVideoQuality !== 'undefined') {
                dispatch((0, actions_1.setPreferredVideoQuality)(persistedPrefferedVideoQuality));
            }
            break;
        }
    }
    return result;
});

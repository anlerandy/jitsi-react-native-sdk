"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DISCO_JIBRI_FEATURE = void 0;
const MiddlewareRegistry_1 = require("../redux/MiddlewareRegistry");
const actionTypes_1 = require("./actionTypes");
/**
 * The feature announced so we can distinguish jibri participants.
 *
 * @type {string}
 */
exports.DISCO_JIBRI_FEATURE = 'http://jitsi.org/protocol/jibri';
MiddlewareRegistry_1.default.register(({ getState }) => next => action => {
    switch (action.type) {
        case actionTypes_1.CONNECTION_WILL_CONNECT: {
            const { connection } = action;
            const { iAmRecorder } = getState()['features/base/config'];
            if (iAmRecorder) {
                connection.addFeature(exports.DISCO_JIBRI_FEATURE);
            }
            // @ts-ignore
            APP.connection = connection;
            break;
        }
    }
    return next(action);
});

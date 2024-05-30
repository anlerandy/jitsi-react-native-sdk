"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionTypes_1 = require("../base/conference/actionTypes");
const MiddlewareRegistry_1 = require("../base/redux/MiddlewareRegistry");
const statsEmitter_1 = require("./statsEmitter");
/**
 * Implements the middleware of the feature connection-indicator.
 *
 * @param {Store} store - The redux store.
 * @returns {Function}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
MiddlewareRegistry_1.default.register(store => next => action => {
    switch (action.type) {
        case actionTypes_1.CONFERENCE_JOINED: {
            statsEmitter_1.default.startListeningForStats(action.conference);
            break;
        }
    }
    return next(action);
});

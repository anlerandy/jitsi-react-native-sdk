"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const ReducerRegistry_1 = require("../redux/ReducerRegistry");
const actionTypes_1 = require("./actionTypes");
/**
 * Default state value for the feature flags.
 */
const DEFAULT_STATE = {};
/**
 * Reduces redux actions which handle feature flags.
 *
 * @param {State} state - The current redux state.
 * @param {Action} action - The redux action to reduce.
 * @param {string} action.type - The type of the redux action to reduce.
 * @returns {State} The next redux state that is the result of reducing the
 * specified action.
 */
ReducerRegistry_1.default.register('features/base/flags', (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes_1.UPDATE_FLAGS: {
            const newState = lodash_1.default.merge({}, state, action.flags);
            return lodash_1.default.isEqual(state, newState) ? state : newState;
        }
    }
    return state;
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersistenceRegistry_1 = require("../base/redux/PersistenceRegistry");
const ReducerRegistry_1 = require("../base/redux/ReducerRegistry");
const actionTypes_1 = require("./actionTypes");
const STORE_NAME = 'features/noise-suppression';
const DEFAULT_STATE = {
    enabled: false
};
PersistenceRegistry_1.default.register(STORE_NAME);
/**
 * Reduces the Redux actions of the feature features/noise-suppression.
 */
ReducerRegistry_1.default.register(STORE_NAME, (state = DEFAULT_STATE, action) => {
    const { enabled } = action;
    switch (action.type) {
        case actionTypes_1.SET_NOISE_SUPPRESSION_ENABLED:
            return {
                ...state,
                enabled
            };
        default:
            return state;
    }
});

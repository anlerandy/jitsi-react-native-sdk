"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReducerRegistry_1 = require("../base/redux/ReducerRegistry");
const actionTypes_1 = require("./actionTypes");
const constants_1 = require("./constants");
const DEFAULT_STATE = {
    disabledFeatures: [],
    status: constants_1.STATUSES.ACTIVE
};
/**
 * Listen for actions that mutate the billing-counter state.
 */
ReducerRegistry_1.default.register('features/jaas', (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes_1.SET_DETAILS: {
            return action.payload;
        }
        default:
            return state;
    }
});

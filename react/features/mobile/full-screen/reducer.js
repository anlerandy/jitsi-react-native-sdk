"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReducerRegistry_1 = require("../../base/redux/ReducerRegistry");
const actionTypes_1 = require("./actionTypes");
ReducerRegistry_1.default.register('features/full-screen', (state = {}, action) => {
    switch (action.type) {
        case actionTypes_1._SET_IMMERSIVE_SUBSCRIPTION:
            return {
                ...state,
                subscription: action.subscription
            };
    }
    return state;
});

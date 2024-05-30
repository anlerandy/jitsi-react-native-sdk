"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReducerRegistry_1 = require("../base/redux/ReducerRegistry");
const actionTypes_1 = require("./actionTypes");
ReducerRegistry_1.default.register('features/videosipgw', (state = {}, action) => {
    switch (action.type) {
        case actionTypes_1.SIP_GW_AVAILABILITY_CHANGED: {
            return {
                ...state,
                status: action.status
            };
        }
    }
    return state;
});

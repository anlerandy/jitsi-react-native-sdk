"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReducerRegistry_1 = require("../base/redux/ReducerRegistry");
const actionTypes_1 = require("./actionTypes");
ReducerRegistry_1.default.register('features/deep-linking', (state = {}, action) => {
    switch (action.type) {
        case actionTypes_1.OPEN_WEB_APP: {
            return {
                ...state,
                launchInWeb: true
            };
        }
    }
    return state;
});

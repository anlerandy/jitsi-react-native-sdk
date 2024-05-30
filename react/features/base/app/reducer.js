"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReducerRegistry_1 = require("../redux/ReducerRegistry");
const actionTypes_1 = require("./actionTypes");
ReducerRegistry_1.default.register('features/base/app', (state = {}, action) => {
    switch (action.type) {
        case actionTypes_1.APP_WILL_MOUNT: {
            const { app } = action;
            if (state.app !== app) {
                return {
                    ...state,
                    app
                };
            }
            break;
        }
        case actionTypes_1.APP_WILL_UNMOUNT:
            if (state.app === action.app) {
                return {
                    ...state,
                    app: undefined
                };
            }
            break;
    }
    return state;
});

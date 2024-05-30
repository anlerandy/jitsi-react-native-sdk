"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReducerRegistry_1 = require("../base/redux/ReducerRegistry");
const actionTypes_1 = require("./actionTypes");
const DEFAULT_STATE = {
    isOpen: false,
    collabDetails: undefined,
    collabServerUrl: undefined
};
ReducerRegistry_1.default.register('features/whiteboard', (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes_1.SETUP_WHITEBOARD: {
            return {
                ...state,
                isOpen: true,
                collabDetails: action.collabDetails,
                collabServerUrl: action.collabServerUrl
            };
        }
        case actionTypes_1.RESET_WHITEBOARD:
            return DEFAULT_STATE;
    }
    return state;
});

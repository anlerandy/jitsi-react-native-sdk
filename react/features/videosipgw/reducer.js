"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReducerRegistry_1 = __importDefault(require("../base/redux/ReducerRegistry"));
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

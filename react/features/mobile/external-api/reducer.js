"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReducerRegistry_1 = require("../../base/redux/ReducerRegistry");
const actionTypes_1 = require("./actionTypes");
const DEFAULT_STATE = {
    screenShares: []
};
ReducerRegistry_1.default.register('features/mobile/external-api', (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes_1.SCREEN_SHARE_PARTICIPANTS_UPDATED: {
            return {
                ...state,
                screenShares: action.participantIds
            };
        }
    }
    return state;
});

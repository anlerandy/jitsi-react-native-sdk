"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReducerRegistry_1 = require("../base/redux/ReducerRegistry");
const actionTypes_1 = require("./actionTypes");
const DEFAULT_STATE = {
    shareDialogVisible: false
};
ReducerRegistry_1.default.register('features/share-room', (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes_1.TOGGLE_SHARE_DIALOG:
            return {
                ...state,
                shareDialogVisible: action.visible
            };
    }
    return state;
});

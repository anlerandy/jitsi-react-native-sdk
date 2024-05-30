"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReducerRegistry_1 = require("../base/redux/ReducerRegistry");
const actionTypes_1 = require("./actionTypes");
const initialState = {
    gifList: new Map(),
    menuOpen: false
};
ReducerRegistry_1.default.register('features/gifs', (state = initialState, action) => {
    switch (action.type) {
        case actionTypes_1.ADD_GIF_FOR_PARTICIPANT: {
            const newList = state.gifList;
            newList.set(action.participantId, {
                gifUrl: action.gifUrl,
                timeoutID: action.timeoutID
            });
            return {
                ...state,
                gifList: newList
            };
        }
        case actionTypes_1.REMOVE_GIF_FOR_PARTICIPANT: {
            const newList = state.gifList;
            newList.delete(action.participantId);
            return {
                ...state,
                gifList: newList
            };
        }
        case actionTypes_1.HIDE_GIF_FOR_PARTICIPANT: {
            const newList = state.gifList;
            const gif = state.gifList.get(action.participantId);
            newList.set(action.participantId, {
                gifUrl: gif?.gifUrl ?? '',
                timeoutID: action.timeoutID
            });
            return {
                ...state,
                gifList: newList
            };
        }
        case actionTypes_1.SET_GIF_MENU_VISIBILITY:
            return {
                ...state,
                menuOpen: action.visible
            };
    }
    return state;
});

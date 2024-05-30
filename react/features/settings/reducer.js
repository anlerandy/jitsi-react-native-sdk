"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReducerRegistry_1 = require("../base/redux/ReducerRegistry");
const actionTypes_1 = require("./actionTypes");
ReducerRegistry_1.default.register('features/settings', (state = {}, action) => {
    switch (action.type) {
        case actionTypes_1.SET_AUDIO_SETTINGS_VISIBILITY:
            return {
                ...state,
                audioSettingsVisible: action.value
            };
        case actionTypes_1.SET_VIDEO_SETTINGS_VISIBILITY:
            return {
                ...state,
                videoSettingsVisible: action.value
            };
    }
    return state;
});

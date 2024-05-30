"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../base/participants/functions");
const StateListenerRegistry_1 = require("../base/redux/StateListenerRegistry");
const actions_1 = require("./actions");
/**
 * Listens for large video participant ID changes.
 */
StateListenerRegistry_1.default.register(
/* selector */ state => {
    const { participantId = '' } = state['features/large-video'];
    const { controller } = state['features/remote-control'];
    const { controlled } = controller;
    if (!controlled) {
        return undefined;
    }
    const participant = (0, functions_1.getParticipantById)(state, participantId);
    if ((0, functions_1.isScreenShareParticipant)(participant)) {
        // multistream support is enabled and the user has selected the desktop sharing thumbnail.
        const id = (0, functions_1.getVirtualScreenshareParticipantOwnerId)(participantId);
        return id === controlled;
    }
    const virtualParticipant = (0, functions_1.getVirtualScreenshareParticipantByOwnerId)(state, participantId);
    if (virtualParticipant) { // multistream is enabled and the user has selected the camera thumbnail.
        return false;
    }
    return controlled === participantId;
}, 
/* listener */ (isControlledParticipantOnStage, { dispatch }) => {
    if (isControlledParticipantOnStage === true) {
        dispatch((0, actions_1.resume)());
    }
    else if (isControlledParticipantOnStage === false) {
        dispatch((0, actions_1.pause)());
    }
    // else {
    // isControlledParticipantOnStage === undefined. Ignore!
    // }
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateListenerRegistry_1 = require("../redux/StateListenerRegistry");
/**
 * Notifies when the local audio mute state changes.
 */
StateListenerRegistry_1.default.register(
/* selector */ (state) => state['features/base/media'].audio.muted, 
/* listener */ (muted, store, previousMuted) => {
    if (typeof APP !== 'object') {
        return;
    }
    if (muted !== previousMuted) {
        APP.API.notifyAudioMutedStatusChanged(muted);
    }
});

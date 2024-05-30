"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_LIST_SIZE = void 0;
const utils_1 = require("../base/connection/utils");
const PersistenceRegistry_1 = require("../base/redux/PersistenceRegistry");
const ReducerRegistry_1 = require("../base/redux/ReducerRegistry");
const actionTypes_1 = require("./actionTypes");
const functions_1 = require("./functions");
/**
 * The default/initial redux state of the feature {@code recent-list}.
 *
 * @type {IRecentListState}
 */
const DEFAULT_STATE = [];
/**
 * The max size of the list.
 *
 * @type {number}
 */
exports.MAX_LIST_SIZE = 30;
/**
 * The redux subtree of this feature.
 */
const STORE_NAME = 'features/recent-list';
/**
 * Sets up the persistence of the feature {@code recent-list}.
 */
PersistenceRegistry_1.default.register(STORE_NAME);
/**
 * Reduces redux actions for the purposes of the feature {@code recent-list}.
 */
ReducerRegistry_1.default.register(STORE_NAME, (state = DEFAULT_STATE, action) => {
    if ((0, functions_1.isRecentListEnabled)()) {
        switch (action.type) {
            case actionTypes_1.DELETE_RECENT_LIST_ENTRY:
                return _deleteRecentListEntry(state, action.entryId);
            case actionTypes_1._STORE_CURRENT_CONFERENCE:
                return _storeCurrentConference(state, action);
            case actionTypes_1._UPDATE_CONFERENCE_DURATION:
                return _updateConferenceDuration(state, action);
            default:
                return state;
        }
    }
    return state;
});
/**
 * Deletes a recent list entry based on the url and date of the item.
 *
 * @param {IRecentListState} state - The Redux state.
 * @param {Object} entryId - The ID object of the entry.
 * @returns {IRecentListState}
 */
function _deleteRecentListEntry(state, entryId) {
    return state.filter(entry => entry.conference !== entryId.url || entry.date !== entryId.date);
}
/**
 * Adds a new list entry to the redux store.
 *
 * @param {IRecentListState} state - The redux state of the feature {@code recent-list}.
 * @param {Object} action - The redux action.
 * @returns {Object}
 */
function _storeCurrentConference(state, { locationURL }) {
    const conference = (0, utils_1.getURLWithoutParamsNormalized)(new URL(locationURL.href));
    // If the current conference is already in the list, we remove it to re-add
    // it to the top.
    const nextState = state.filter(e => !_urlStringEquals(e.conference, conference));
    // The list is a reverse-sorted (i.e. the newer elements are at the end).
    nextState.push({
        conference,
        date: Date.now(),
        duration: 0 // We don't have the duration yet!
    });
    // Ensure the list doesn't exceed a/the maximum size.
    nextState.splice(0, nextState.length - exports.MAX_LIST_SIZE);
    return nextState;
}
/**
 * Updates the conference length when left.
 *
 * @param {IRecentListState} state - The redux state of the feature {@code recent-list}.
 * @param {Object} action - The redux action.
 * @returns {Object} The next redux state of the feature {@code recent-list}.
 */
function _updateConferenceDuration(state, { locationURL }) {
    if (locationURL?.href && state.length) {
        const mostRecentIndex = state.length - 1;
        const mostRecent = state[mostRecentIndex];
        if (_urlStringEquals(mostRecent.conference, locationURL.href)) {
            // The last conference start was stored so we need to update the
            // length.
            const nextMostRecent = {
                ...mostRecent,
                duration: Date.now() - mostRecent.date
            };
            // Shallow copy to avoid in-place modification.
            const nextState = state.slice();
            nextState[mostRecentIndex] = nextMostRecent;
            return nextState;
        }
    }
    return state;
}
/**
 * Determines whether two specific URL {@code strings} are equal in the sense
 * that they identify one and the same conference resource (irrespective of
 * time) for the purposes of the feature {@code recent-list}.
 *
 * @param {string} a - The URL {@code string} to test for equality to {@code b}.
 * @param {string} b - The URL {@code string} to test for equality to {@code a}.
 * @returns {boolean}
 */
function _urlStringEquals(a, b) {
    const aHref = (0, utils_1.getURLWithoutParamsNormalized)(new URL(a));
    const bHref = (0, utils_1.getURLWithoutParamsNormalized)(new URL(b));
    return aHref === bHref;
}

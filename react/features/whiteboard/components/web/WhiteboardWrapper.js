"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const excalidraw_1 = require("@jitsi/excalidraw");
const i18next_1 = require("i18next");
const react_1 = require("react");
const constants_1 = require("../../constants");
/**
 * Whiteboard wrapper for mobile.
 *
 * @returns {JSX.Element}
 */
const WhiteboardWrapper = ({ className, collabDetails, collabServerUrl, localParticipantName }) => {
    const excalidrawRef = (0, react_1.useRef)(null);
    const excalidrawAPIRef = (0, react_1.useRef)(null);
    const collabAPIRef = (0, react_1.useRef)(null);
    const getExcalidrawAPI = (0, react_1.useCallback)(excalidrawAPI => {
        if (excalidrawAPIRef.current) {
            return;
        }
        excalidrawAPIRef.current = excalidrawAPI;
    }, []);
    const getCollabAPI = (0, react_1.useCallback)(collabAPI => {
        if (collabAPIRef.current) {
            return;
        }
        collabAPIRef.current = collabAPI;
        collabAPIRef.current.setUsername(localParticipantName);
    }, [localParticipantName]);
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement("div", { className: 'excalidraw-wrapper' },
            react_1.default.createElement(excalidraw_1.ExcalidrawApp, { collabDetails: collabDetails, collabServerUrl: collabServerUrl, detectScroll: true, excalidraw: {
                    isCollaborating: true,
                    langCode: i18next_1.default.language,
                    // @ts-ignore
                    ref: excalidrawRef,
                    theme: 'light',
                    UIOptions: constants_1.WHITEBOARD_UI_OPTIONS
                }, getCollabAPI: getCollabAPI, getExcalidrawAPI: getExcalidrawAPI }))));
};
exports.default = WhiteboardWrapper;

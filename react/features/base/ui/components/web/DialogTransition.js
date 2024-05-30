"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogTransitionContext = void 0;
const react_1 = require("react");
exports.DialogTransitionContext = react_1.default.createContext({ isUnmounting: false });
const DialogTransition = ({ children }) => {
    const [childrenToRender, setChildrenToRender] = (0, react_1.useState)(children);
    const [isUnmounting, setIsUnmounting] = (0, react_1.useState)(false);
    const [timeoutID, setTimeoutID] = (0, react_1.useState)(undefined);
    (0, react_1.useEffect)(() => {
        if (children === null) {
            setIsUnmounting(true);
            if (typeof timeoutID === 'undefined') {
                setTimeoutID(setTimeout(() => {
                    setChildrenToRender(children);
                    setIsUnmounting(false);
                    setTimeoutID(undefined);
                }, 150));
            }
        }
        else {
            if (typeof timeoutID !== 'undefined') {
                clearTimeout(timeoutID);
                setTimeoutID(undefined);
                setIsUnmounting(false);
            }
            setChildrenToRender(children);
        }
    }, [children]);
    return (react_1.default.createElement(exports.DialogTransitionContext.Provider, { value: { isUnmounting } }, childrenToRender));
};
exports.default = DialogTransition;

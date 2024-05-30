"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsTransitionContext = void 0;
const react_1 = require("react");
exports.NotificationsTransitionContext = react_1.default.createContext({
    unmounting: new Map()
});
const NotificationsTransition = ({ children }) => {
    const [childrenToRender, setChildrenToRender] = (0, react_1.useState)(children);
    const [timeoutIds, setTimeoutIds] = (0, react_1.useState)(new Map());
    (0, react_1.useEffect)(() => {
        const toUnmount = childrenToRender.filter(child => children.findIndex(c => c.props.uid === child.props.uid) === -1) ?? [];
        const toMount = children?.filter(child => childrenToRender.findIndex(c => c.props.uid === child.props.uid) === -1) ?? [];
        /**
         * Update current notifications.
         * In some cases the UID is the same but the other props change.
         * This way we make sure the notification displays the latest info.
         */
        children.forEach(child => {
            const index = childrenToRender.findIndex(c => c.props.uid === child.props.uid);
            if (index !== -1) {
                childrenToRender[index] = child;
            }
        });
        if (toUnmount.length > 0) {
            const ids = new Map(timeoutIds);
            toUnmount.forEach(child => {
                const timeoutId = setTimeout(() => {
                    timeoutIds.set(child.props.uid, null);
                    setTimeoutIds(timeoutIds);
                }, 250);
                ids.set(child.props.uid, timeoutId);
            });
            setTimeoutIds(ids);
        }
        setChildrenToRender(toMount.concat(childrenToRender));
    }, [children]);
    (0, react_1.useEffect)(() => {
        const toRemove = [];
        timeoutIds.forEach((value, key) => {
            if (value === null) {
                toRemove.push(key);
                timeoutIds.delete(key);
            }
        });
        toRemove.length > 0 && setChildrenToRender(childrenToRender.filter(child => toRemove.findIndex(id => child.props.uid === id) === -1));
    }, [timeoutIds]);
    return (react_1.default.createElement(exports.NotificationsTransitionContext.Provider, { value: { unmounting: timeoutIds } }, childrenToRender));
};
exports.default = NotificationsTransition;

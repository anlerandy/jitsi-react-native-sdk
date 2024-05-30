"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
/**
 * Higher Order Component taking in a concrete PollsPane component and
 * augmenting it with state/behavior common to both web and native implementations.
 *
 * @param {React.AbstractComponent} Component - The concrete component.
 * @returns {React.AbstractComponent}
 */
const AbstractPollsPane = (Component) => () => {
    const [createMode, setCreateMode] = (0, react_1.useState)(false);
    const onCreate = () => {
        setCreateMode(true);
    };
    const { t } = (0, react_i18next_1.useTranslation)();
    return (react_1.default.createElement(Component, { createMode: createMode, 
        /* eslint-disable react/jsx-no-bind */
        onCreate: onCreate, setCreateMode: setCreateMode, t: t }));
};
exports.default = AbstractPollsPane;

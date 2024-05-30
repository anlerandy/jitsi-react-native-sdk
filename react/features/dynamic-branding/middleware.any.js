"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MiddlewareRegistry_1 = require("../base/redux/MiddlewareRegistry");
const actionTypes_1 = require("./actionTypes");
const functions_any_1 = require("./functions.any");
const logger_1 = require("./logger");
MiddlewareRegistry_1.default.register(() => next => action => {
    switch (action.type) {
        case actionTypes_1.SET_DYNAMIC_BRANDING_DATA: {
            const { customIcons } = action.value;
            if (customIcons) {
                (0, functions_any_1.fetchCustomIcons)(customIcons)
                    .then(localCustomIcons => {
                    action.value.brandedIcons = localCustomIcons;
                    return next(action);
                })
                    .catch((error) => {
                    logger_1.default.error('Error fetching branded custom icons:', error);
                });
            }
            break;
        }
    }
    return next(action);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
const AbstractTestHint_1 = require("./AbstractTestHint");
/**
 * This is the iOS version of the TestHint.
 *
 * Be sure to check the description in TestHint.android and AbstractTestHint
 * files to understand what a test hint is and why different iOS and Android
 * components are necessary.
 */
class TestHint extends react_1.Component {
    /**
     *  Renders the test hint on Android.
     *
     * @returns {ReactElement}
     */
    render() {
        if (!this.props._testModeEnabled) {
            return null;
        }
        return (react_1.default.createElement(react_native_1.Text, { accessibilityLabel: this.props.value, onPress: this.props.onPress, testID: this.props.id }));
    }
}
exports.default = (0, react_redux_1.connect)(AbstractTestHint_1._mapStateToProps)(TestHint);

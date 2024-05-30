"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const JitsiKeyboardAvoidingView_1 = require("./JitsiKeyboardAvoidingView");
const styles_1 = require("./styles");
const JitsiScreen = ({ addBottomPadding, contentContainerStyle, children, disableForcedKeyboardDismiss = false, footerComponent, hasBottomTextInput = false, hasExtraHeaderHeight = false, safeAreaInsets = ['left', 'right'], style }) => {
    const renderContent = () => (react_1.default.createElement(JitsiKeyboardAvoidingView_1.default, { addBottomPadding: addBottomPadding, contentContainerStyle: contentContainerStyle, disableForcedKeyboardDismiss: disableForcedKeyboardDismiss, hasBottomTextInput: hasBottomTextInput, hasExtraHeaderHeight: hasExtraHeaderHeight, style: style },
        react_1.default.createElement(react_native_safe_area_context_1.SafeAreaView, { edges: safeAreaInsets, style: styles_1.default.safeArea }, children),
        footerComponent?.()));
    return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.jitsiScreenContainer }, renderContent()));
};
exports.default = JitsiScreen;

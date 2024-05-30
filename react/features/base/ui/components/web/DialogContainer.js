"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const JitsiPortal_1 = require("../../../../toolbox/components/web/JitsiPortal");
const functions_web_1 = require("../../../../toolbox/functions.web");
const DialogTransition_1 = require("./DialogTransition");
/**
 * Implements a DialogContainer responsible for showing all dialogs. Necessary
 * for supporting @atlaskit's modal animations.
 *
 */
class DialogContainer extends react_1.Component {
    /**
     * Returns the dialog to be displayed.
     *
     * @private
     * @returns {ReactElement|null}
     */
    _renderDialogContent() {
        const { _component: component, _reducedUI: reducedUI } = this.props;
        return (component && !reducedUI
            ? react_1.default.createElement(component, this.props._componentProps)
            : null);
    }
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (react_1.default.createElement(DialogTransition_1.default, null, this.props._overflowDrawer
            ? react_1.default.createElement(JitsiPortal_1.default, null, this._renderDialogContent())
            : this._renderDialogContent()));
    }
}
/**
 * Maps (parts of) the redux state to the associated
 * {@code AbstractDialogContainer}'s props.
 *
 * @param {Object} state - The redux state.
 * @private
 * @returns {IProps}
 */
function mapStateToProps(state) {
    const stateFeaturesBaseDialog = state['features/base/dialog'];
    const { reducedUI } = state['features/base/responsive-ui'];
    const overflowDrawer = (0, functions_web_1.showOverflowDrawer)(state);
    return {
        _component: stateFeaturesBaseDialog.component,
        _componentProps: stateFeaturesBaseDialog.componentProps,
        _overflowDrawer: overflowDrawer,
        _reducedUI: reducedUI
    };
}
exports.default = (0, react_redux_1.connect)(mapStateToProps)(DialogContainer);

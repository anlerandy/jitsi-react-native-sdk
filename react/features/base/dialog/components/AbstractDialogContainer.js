"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abstractMapStateToProps = void 0;
const react_1 = require("react");
/**
 * Implements a DialogContainer responsible for showing all dialogs.
 */
class AbstractDialogContainer extends react_1.Component {
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
}
exports.default = AbstractDialogContainer;
/**
 * Maps (parts of) the redux state to the associated
 * {@code AbstractDialogContainer}'s props.
 *
 * @param {Object} state - The redux state.
 * @private
 * @returns {IProps}
 */
function abstractMapStateToProps(state) {
    const stateFeaturesBaseDialog = state['features/base/dialog'];
    const { reducedUI } = state['features/base/responsive-ui'];
    return {
        _component: stateFeaturesBaseDialog.component,
        _componentProps: stateFeaturesBaseDialog.componentProps,
        _reducedUI: reducedUI
    };
}
exports.abstractMapStateToProps = abstractMapStateToProps;

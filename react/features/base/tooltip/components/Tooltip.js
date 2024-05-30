"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const tss_react_1 = require("tss-react");
const mui_1 = require("tss-react/mui");
const utils_1 = require("../../environment/utils");
const Popover_web_1 = require("../../popover/components/Popover.web");
const functions_web_1 = require("../../styles/functions.web");
const actions_1 = require("../actions");
const TOOLTIP_DELAY = 300;
const ANIMATION_DURATION = 0.2;
const useStyles = (0, mui_1.makeStyles)()(theme => {
    return {
        container: {
            backgroundColor: theme.palette.uiBackground,
            borderRadius: '3px',
            padding: theme.spacing(2),
            ...(0, functions_web_1.withPixelLineHeight)(theme.typography.labelRegular),
            color: theme.palette.text01,
            position: 'relative',
            '&.mounting-animation': {
                animation: `${(0, tss_react_1.keyframes) `
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                `} ${ANIMATION_DURATION}s forwards ease-in`
            },
            '&.unmounting': {
                animation: `${(0, tss_react_1.keyframes) `
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                `} ${ANIMATION_DURATION}s forwards ease-out`
            }
        }
    };
});
const Tooltip = ({ containerClassName, content, children, position = 'top' }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const [visible, setVisible] = (0, react_1.useState)(false);
    const [isUnmounting, setIsUnmounting] = (0, react_1.useState)(false);
    const overflowDrawer = (0, react_redux_1.useSelector)((state) => state['features/toolbox'].overflowDrawer);
    const { classes, cx } = useStyles();
    const timeoutID = (0, react_1.useRef)({
        open: 0,
        close: 0
    });
    const { content: storeContent, previousContent, visible: isVisible } = (0, react_redux_1.useSelector)((state) => state['features/base/tooltip']);
    const contentComponent = (react_1.default.createElement("div", { className: cx(classes.container, previousContent === '' && 'mounting-animation', isUnmounting && 'unmounting') }, content));
    const openPopover = () => {
        setVisible(true);
        dispatch((0, actions_1.showTooltip)(content));
    };
    const closePopover = () => {
        setVisible(false);
        dispatch((0, actions_1.hideTooltip)(content));
        setIsUnmounting(false);
    };
    const onPopoverOpen = (0, react_1.useCallback)(() => {
        if (isUnmounting) {
            return;
        }
        clearTimeout(timeoutID.current.close);
        timeoutID.current.close = 0;
        if (!visible) {
            if (isVisible) {
                openPopover();
            }
            else {
                timeoutID.current.open = window.setTimeout(() => {
                    openPopover();
                }, TOOLTIP_DELAY);
            }
        }
    }, [visible, isVisible, isUnmounting]);
    const onPopoverClose = (0, react_1.useCallback)(() => {
        clearTimeout(timeoutID.current.open);
        if (visible) {
            timeoutID.current.close = window.setTimeout(() => {
                setIsUnmounting(true);
            }, TOOLTIP_DELAY);
        }
    }, [visible]);
    (0, react_1.useEffect)(() => {
        if (isUnmounting) {
            setTimeout(() => {
                if (timeoutID.current.close !== 0) {
                    closePopover();
                }
            }, (ANIMATION_DURATION * 1000) + 10);
        }
    }, [isUnmounting]);
    (0, react_1.useEffect)(() => {
        if (storeContent !== content) {
            closePopover();
            clearTimeout(timeoutID.current.close);
            timeoutID.current.close = 0;
        }
    }, [storeContent]);
    if ((0, utils_1.isMobileBrowser)() || overflowDrawer) {
        return children;
    }
    return (react_1.default.createElement(Popover_web_1.default, { allowClick: true, className: containerClassName, content: contentComponent, focusable: false, onPopoverClose: onPopoverClose, onPopoverOpen: onPopoverOpen, position: position, visible: visible }, children));
};
exports.default = Tooltip;

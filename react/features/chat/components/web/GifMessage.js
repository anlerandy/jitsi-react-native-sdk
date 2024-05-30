"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const useStyles = (0, mui_1.makeStyles)()(() => {
    return {
        container: {
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden',
            maxHeight: '150px',
            '& img': {
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                flexGrow: 1
            }
        }
    };
});
const GifMessage = ({ url }) => {
    const { classes: styles } = useStyles();
    return (react_1.default.createElement("div", { className: styles.container },
        react_1.default.createElement("img", { alt: url, src: url })));
};
exports.default = GifMessage;

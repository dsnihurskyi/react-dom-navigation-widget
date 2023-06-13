"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var bootstrap_1 = require("bootstrap");
var DomTreeList_1 = __importDefault(require("./DomTreeList"));
var DomTreeToast_1 = __importDefault(require("./DomTreeToast"));
require("bootstrap/dist/css/bootstrap.css");
require("./index.css");
var EmbedWidget = function (_a) {
    var isDefaultVisible = _a.isDefaultVisible;
    var widgetRef = (0, react_1.useRef)(null);
    var toastRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(Boolean(isDefaultVisible)), isWidgetVisible = _b[0], setIsWidgetVisible = _b[1];
    var _c = (0, react_1.useState)(null), domTree = _c[0], setDomTree = _c[1];
    var handleSetToastVisibility = function (visibilityValue) {
        if (toastRef === null || toastRef === void 0 ? void 0 : toastRef.current) {
            var toastInstance = bootstrap_1.Toast.getOrCreateInstance(toastRef.current);
            visibilityValue
                ? toastInstance.show()
                : toastInstance.hide();
            setIsWidgetVisible(visibilityValue);
        }
    };
    (0, react_1.useEffect)(function () {
        handleSetToastVisibility(Boolean(isDefaultVisible));
    }, [isDefaultVisible]);
    var toggleToast = function () {
        handleSetToastVisibility(!isWidgetVisible);
    };
    var toggleParsedDOM = function () {
        var root = document.documentElement;
        setDomTree(domTree ? null : root);
    };
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { ref: widgetRef, className: "embed-widget" },
        !isWidgetVisible && (react_1.default.createElement("button", { type: 'button', className: 'btn btn-light embed-widget-button', onClick: toggleToast }, "\uD83D\uDEE0 Show DOM tree navigation widget")),
        react_1.default.createElement(DomTreeToast_1.default, { toastRef: toastRef, toggleToast: toggleToast },
            react_1.default.createElement("button", { onClick: toggleParsedDOM, className: "btn btn-".concat(domTree ? 'warning' : 'primary', " mb-2") }, domTree ? 'Clear' : 'Parse DOM'),
            domTree && widgetRef && isWidgetVisible && (react_1.default.createElement(DomTreeList_1.default, { widgetRef: widgetRef, domTree: domTree }))))), document.body);
};
exports.default = EmbedWidget;

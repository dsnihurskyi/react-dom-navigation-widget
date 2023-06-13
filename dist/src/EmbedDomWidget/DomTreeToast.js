"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("bootstrap/dist/css/bootstrap.css");
require("./index.css");
var DomTreeToast = function (_a) {
    var toastRef = _a.toastRef, toggleToast = _a.toggleToast, children = _a.children;
    return (react_1.default.createElement("div", { className: 'toast-container position-fixed top-0 end-0 p-3' },
        react_1.default.createElement("div", { ref: toastRef, className: 'toast', role: 'alert', "data-bs-animation": 'true', "data-bs-autohide": 'false', "aria-live": 'assertive', "aria-atomic": 'true' },
            react_1.default.createElement("div", { className: 'toast-header' },
                react_1.default.createElement("strong", { className: 'me-auto' }, "DOM tree navigation widget"),
                react_1.default.createElement("button", { onClick: toggleToast, type: 'button', className: 'btn-close', "data-bs-dismiss": 'toast', "aria-label": 'Close' })),
            react_1.default.createElement("div", { className: 'toast-body' }, children))));
};
exports.default = DomTreeToast;

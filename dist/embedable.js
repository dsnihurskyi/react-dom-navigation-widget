"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var EmbedDomWidget_1 = __importDefault(require("./src/EmbedDomWidget"));
var init = function (_a) {
    var isDefaultVisible = _a.isDefaultVisible;
    react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
        react_1.default.createElement(EmbedDomWidget_1.default, { isDefaultVisible: Boolean(isDefaultVisible) })), document.body);
};
exports.init = init;

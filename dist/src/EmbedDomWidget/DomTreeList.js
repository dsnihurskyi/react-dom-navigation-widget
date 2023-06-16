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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var DomTreeList = function (_a) {
    var widgetRef = _a.widgetRef, domTree = _a.domTree;
    var _b = (0, react_1.useState)(null), selectedNode = _b[0], setSelectedNode = _b[1];
    var handleNodeClick = function (currentEvent, node) {
        currentEvent.stopPropagation();
        node.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setSelectedNode(node);
    };
    (0, react_1.useEffect)(function () {
        var resizeListener = function () {
            setSelectedNode(null);
        };
        window.addEventListener('resize', resizeListener);
        return function () {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        if (selectedNode === null) {
            return;
        }
        ;
        // eslint-disable-next-line no-shadow
        var _a = selectedNode.getBoundingClientRect(), top = _a.top, left = _a.left, width = _a.width, height = _a.height;
        var newOverlayElement = document.createElement('div');
        newOverlayElement.setAttribute('data-embed-widget-highlight', 'true');
        newOverlayElement.style.top = "".concat(top + window.scrollY, "px");
        newOverlayElement.style.left = "".concat(left + window.scrollX, "px");
        newOverlayElement.style.width = "".concat(width, "px");
        newOverlayElement.style.height = "".concat(height, "px");
        document.body.appendChild(newOverlayElement);
        return function () {
            document.body.removeChild(newOverlayElement);
        };
    }, [selectedNode]);
    var renderTree = function (node, onClick) {
        if (node === widgetRef.current) {
            return null;
        }
        var isNonInteractiveNode = (node.tagName.toLowerCase() === 'head'
            || node.tagName.toLowerCase() === 'meta'
            || node.tagName.toLowerCase() === 'title'
            || node.tagName.toLowerCase() === 'link'
            || node.tagName.toLowerCase() === 'style'
            || node.tagName.toLowerCase() === 'script'
            || node.tagName.toLowerCase() === 'noscript');
        return (react_1.default.createElement("ul", { className: 'dom-tree-list' },
            react_1.default.createElement("li", { className: 'dom-tree-list__item' },
                react_1.default.createElement("button", { onClick: function (currentEvent) {
                        onClick(currentEvent, node);
                    }, className: "btn btn-".concat(selectedNode === node ? 'primary' : 'link', " btn-sm"), disabled: isNonInteractiveNode }, node.tagName.toUpperCase()),
                (node.children.length > 0 && !isNonInteractiveNode) && (Array.from(node.children).map(function (child, idx) { return (react_1.default.createElement(react_1.default.Fragment, { key: idx }, renderTree(child, onClick))); })))));
    };
    return (react_1.default.createElement("div", { className: 'dom-tree-list-wrapper' }, renderTree(domTree, handleNodeClick)));
};
exports.default = DomTreeList;

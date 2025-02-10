"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultNodeFactory = void 0;
var React = require("react");
var DefaultNodeModel_1 = require("./DefaultNodeModel");
var DefaultNodeWidget_1 = require("./DefaultNodeWidget");
var react_canvas_core_1 = require("@projectstorm/react-canvas-core");
var DefaultNodeFactory = /** @class */ (function (_super) {
    __extends(DefaultNodeFactory, _super);
    function DefaultNodeFactory() {
        return _super.call(this, 'default') || this;
    }
    DefaultNodeFactory.prototype.generateReactWidget = function (event) {
        return <DefaultNodeWidget_1.DefaultNodeWidget engine={this.engine} node={event.model}/>;
    };
    DefaultNodeFactory.prototype.generateModel = function (event) {
        return new DefaultNodeModel_1.DefaultNodeModel();
    };
    return DefaultNodeFactory;
}(react_canvas_core_1.AbstractReactFactory));
exports.DefaultNodeFactory = DefaultNodeFactory;

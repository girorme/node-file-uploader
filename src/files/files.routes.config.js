"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.FilesRoutes = void 0;
var common_routes_config_1 = require("../common/common.routes.config");
var FilesRoutes = /** @class */ (function (_super) {
    __extends(FilesRoutes, _super);
    function FilesRoutes(app) {
        return _super.call(this, app, 'FilesRoutes') || this;
    }
    FilesRoutes.prototype.configureRoutes = function () {
        this.app.route('/files')
            .get(function (req, res) {
            res.status(200).send('List files');
        })
            .post(function (req, res) {
            res.status(200).send('Post to files');
        });
        return this.app;
    };
    return FilesRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.FilesRoutes = FilesRoutes;

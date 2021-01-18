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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWxlcy9maWxlcy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBb0U7QUFHcEU7SUFBaUMsK0JBQWtCO0lBQy9DLHFCQUFZLEdBQXdCO2VBQ2hDLGtCQUFNLEdBQUcsRUFBRSxhQUFhLENBQUM7SUFDN0IsQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDbkIsR0FBRyxDQUFDLFVBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUM3QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN0QyxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxHQUFvQixFQUFFLEdBQXFCO1lBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRVAsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFoQkQsQ0FBaUMseUNBQWtCLEdBZ0JsRDtBQWhCWSxrQ0FBVyJ9
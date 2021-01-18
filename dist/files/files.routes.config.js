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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.FilesRoutes = void 0;
var common_routes_config_1 = require("../common/common.routes.config");
var xlsx_1 = __importDefault(require("xlsx"));
var formidable_1 = __importDefault(require("formidable"));
var FilesRoutes = /** @class */ (function (_super) {
    __extends(FilesRoutes, _super);
    function FilesRoutes(app) {
        return _super.call(this, app, 'FilesRoutes') || this;
    }
    FilesRoutes.prototype.configureRoutes = function () {
        this.app.route('/files/xlsx')
            .get(function (req, res) {
            res.status(200).send('List files');
        })
            .post(function (req, res) {
            var form = new formidable_1["default"].IncomingForm();
            form.parse(req, function (_err, _fields, files) {
                var f = files[Object.keys(files)[0]];
                var workbook = xlsx_1["default"].readFile(f.path);
                var sheet_name_list = workbook.SheetNames[0];
                res.status(200).send(xlsx_1["default"].utils.sheet_to_json(workbook.Sheets[sheet_name_list]));
            });
        });
        return this.app;
    };
    return FilesRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.FilesRoutes = FilesRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWxlcy9maWxlcy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBb0U7QUFFcEUsOENBQXVDO0FBQ3ZDLDBEQUFvQztBQUVwQztJQUFpQywrQkFBa0I7SUFDL0MscUJBQVksR0FBd0I7ZUFDaEMsa0JBQU0sR0FBRyxFQUFFLGFBQWEsQ0FBQztJQUM3QixDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQzthQUN4QixHQUFHLENBQUMsVUFBQyxHQUFvQixFQUFFLEdBQXFCO1lBQzdDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3RDLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDOUMsSUFBTSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFVBQVMsSUFBUyxFQUFFLE9BQVksRUFBRSxLQUFVO2dCQUN4RCxJQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFNLFFBQVEsR0FBRyxpQkFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNoQixpQkFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUM3RCxDQUFBO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVQLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBeEJELENBQWlDLHlDQUFrQixHQXdCbEQ7QUF4Qlksa0NBQVcifQ==
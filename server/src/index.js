"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.routes();
    }
    App.prototype.routes = function () {
        var router = express_1.default.Router();
        // TODO add routes
        // TODO Set up error handling and exception handling here
        this.app.use('/', router);
    };
    return App;
}());
exports.default = App;
var app = new App().app;
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Listening on port " + port);
});
module.exports = app;

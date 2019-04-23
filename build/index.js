"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _pt_BR = _interopRequireDefault(require("faker/locale/pt_BR"));

var _schema = _interopRequireDefault(require("./schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use("/graphql", (0, _expressGraphql["default"])({
  schema: _schema["default"],
  rootValue: {
    user: {
      name: _pt_BR["default"].name.firstName(),
      invoice: _pt_BR["default"].finance.amount(100, 1000, 2),
      creditCardLimit: 3000.0,
      lastPurchase: {
        company: _pt_BR["default"].company.companyName(),
        value: _pt_BR["default"].finance.amount(100, 500, 2)
      },
      balance: _pt_BR["default"].finance.amount(10000, 20000, 2),
      rewardsPoints: _pt_BR["default"].finance.amount(20000, 30000, 2),
      lastAcumulatedPoints: _pt_BR["default"].finance.amount(2000, 3000, 2),
      suggestionRewards: {
        value: _pt_BR["default"].finance.amount(200, 300, 2),
        points: _pt_BR["default"].finance.amount(2000, 3000, 2)
      }
    }
  },
  graphiql: true
}));
app.listen(3000);
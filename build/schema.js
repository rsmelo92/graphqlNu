"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphql = require("graphql");

var schema = (0, _graphql.buildSchema)("\n      type SuggestionRewards {\n          value: Float!\n          points: Float!\n      }\n\n      type LastPurchase {\n          company: String!\n          value: Float!\n      }\n\n      type User {\n        name: String!\n        invoice: Float!\n        creditCardLimit: Float!\n        lastPurchase: LastPurchase!\n        balance: Float!\n        rewardsPoints: Float!\n        lastAcumulatedPoints: Float!\n        suggestionRewards: SuggestionRewards!\n      }\n\n      type RootQuery {\n        user: User!\n      }\n\n      schema {\n        query: RootQuery\n      }\n    ");
var _default = schema;
exports["default"] = _default;
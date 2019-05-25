import express from "express";
import path from "path";
import bodyParser from "body-parser";
import graphqlHttp from "express-graphql";
import faker from "faker/locale/pt_BR";
import schema from "./schema";
import * as intl from "intl";
const app = express();

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/redirect.html"));
});

function formatMoney(num) {
  const fixedNum = Number(num).toFixed(2);
  return fixedNum
    .replace(".", ",") // replace decimal point character with ,
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); // use . as a separator
}
app.use(
  "/graphql",
  graphqlHttp(() => ({
    schema,
    rootValue: {
      user: {
        id: faker.random.number(),
        name: faker.name.firstName(),
        invoice: formatMoney(faker.finance.amount(100, 1000, 2)),
        creditCardLimit: formatMoney(3000.0),
        lastPurchase: {
          company: faker.company.companyName(),
          value: formatMoney(faker.finance.amount(100, 500, 2))
        },
        transfer: {
          name: faker.name.firstName(),
          value: formatMoney(faker.finance.amount(100, 500, 2))
        },
        balance: formatMoney(faker.finance.amount(10000, 20000, 2)),
        rewardsPoints: formatMoney(faker.finance.amount(20000, 30000, 2)),
        lastAcumulatedPoints: formatMoney(faker.finance.amount(2000, 3000, 2)),
        suggestionRewards: {
          value: formatMoney(faker.finance.amount(200, 300, 2)),
          points: formatMoney(faker.finance.amount(2000, 3000, 2))
        }
      }
    },
    graphiql: true
  }))
);

app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log("Server started.......");
});

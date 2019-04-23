import express from "express";
import path from "path";
import bodyParser from "body-parser";
import graphqlHttp from "express-graphql";
import faker from "faker/locale/pt_BR";
import serverless from "serverless-http";
import schema from "./schema";

const app = express();
const router = express.Router();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile("redirect.html", { root: __dirname });
});

router.get(
  "/graphql",
  graphqlHttp({
    schema,
    rootValue: {
      user: {
        name: faker.name.firstName(),
        invoice: faker.finance.amount(100, 1000, 2),
        creditCardLimit: 3000.0,
        lastPurchase: {
          company: faker.company.companyName(),
          value: faker.finance.amount(100, 500, 2)
        },
        balance: faker.finance.amount(10000, 20000, 2),
        rewardsPoints: faker.finance.amount(20000, 30000, 2),
        lastAcumulatedPoints: faker.finance.amount(2000, 3000, 2),
        suggestionRewards: {
          value: faker.finance.amount(200, 300, 2),
          points: faker.finance.amount(2000, 3000, 2)
        }
      }
    },
    graphiql: true
  })
);

app.use(
  "/graphql",
  graphqlHttp({
    schema,
    rootValue: {
      user: {
        name: faker.name.firstName(),
        invoice: faker.finance.amount(100, 1000, 2),
        creditCardLimit: 3000.0,
        lastPurchase: {
          company: faker.company.companyName(),
          value: faker.finance.amount(100, 500, 2)
        },
        balance: faker.finance.amount(10000, 20000, 2),
        rewardsPoints: faker.finance.amount(20000, 30000, 2),
        lastAcumulatedPoints: faker.finance.amount(2000, 3000, 2),
        suggestionRewards: {
          value: faker.finance.amount(200, 300, 2),
          points: faker.finance.amount(2000, 3000, 2)
        }
      }
    },
    graphiql: true
  })
);

app.use("/.netlify/functions/server", router);

app.listen(3000);

exports.handler = serverless(app);

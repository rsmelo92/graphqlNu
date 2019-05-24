import { buildSchema } from "graphql";

const schema = buildSchema(`
      type SuggestionRewards {
          value: String!
          points: String!
      }

      type Transfer {
          name: String!
          value: String!
      }

      type LastPurchase {
          company: String!
          value: String!
      }

      type User {
        id: ID!
        name: String!
        invoice: String!
        creditCardLimit: String!
        lastPurchase: LastPurchase!
        transfer: Transfer!
        balance: String!
        rewardsPoints: String!
        lastAcumulatedPoints: String!
        suggestionRewards: SuggestionRewards!
      }

      type RootQuery {
        user: User!
      }

      schema {
        query: RootQuery
      }
    `);

export default schema;

import { buildSchema } from "graphql";

const schema = buildSchema(`
      type SuggestionRewards {
          value: Float!
          points: Float!
      }

      type LastPurchase {
          company: String!
          value: Float!
      }

      type User {
        name: String!
        invoice: Float!
        creditCardLimit: Float!
        lastPurchase: LastPurchase!
        balance: Float!
        rewardsPoints: Float!
        lastAcumulatedPoints: Float!
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

import { buildSchema } from "graphql";

const schema = buildSchema(`
      type SuggestionRewards {
          value: Float!
          points: Float!
      }

      type Transfer {
          name: String!
          value: Float!
      }

      type LastPurchase {
          company: String!
          value: Float!
      }

      type User {
        id: ID!
        name: String!
        invoice: Float!
        creditCardLimit: String!
        lastPurchase: LastPurchase!
        transfer: Transfer!
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

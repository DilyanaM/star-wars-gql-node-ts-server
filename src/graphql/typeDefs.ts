import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Character {
    id: ID!,
    name: String!,
    image: String!,
    wiki: String!,
    species: String!
  }

  type Query {
    characters: [Character!]!
  }

  type Mutation {
    deleteCharacter(id: ID!): Character!
  }
`;

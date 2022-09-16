const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array fro the hompage grid"
    tracksForHome: [Track!]!
  }
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration to display in track card or track page detail"
    thumbnail: String
    "the track's apprx length to complete, in mins"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "author's profile pic URL"
    photo: String
  }
`;

module.exports = typeDefs;

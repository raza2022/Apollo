import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import ResolutionsSchema from '../../api/resolutions/resolutions.graphql';
import ResolutionsResolvers from '/imports/api/resolutions/resolvers'

const testSchema = `type Query {
    hi : String
    resolutions: [Resolution]
}`;

const typeDefs = [
    testSchema,
    ResolutionsSchema
];

const resolver = {
    Query: {
        hi(){
            return "Hello Apollo!"
        }
    }
};

const resolvers = merge(resolver, ResolutionsResolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({schema});
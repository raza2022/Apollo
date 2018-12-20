import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import ResolutionsSchema from '../../api/resolutions/resolutions.graphql';
import UserSchema from '../../api/users/User.graphql';
import UserResolvers from '/imports/api/users/resolvers'
import ResolutionsResolvers from '/imports/api/resolutions/resolvers'


const testSchema = `type Query {
    hi : String
    resolutions: [Resolution]
    user: User
}`;



const typeDefs = [
    testSchema,
    ResolutionsSchema,
    UserSchema
];

const resolver = {
    Query: {
        hi(){
            return "Hello Apollo!"
        }
    }
};

const resolvers = merge(resolver, ResolutionsResolvers, UserResolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

createApolloServer({schema});
import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import ResolutionsSchema from '../../api/resolutions/resolutions.graphql';
import UserSchema from '../../api/users/User.graphql';
import UserResolvers from '/imports/api/users/resolvers'
import ResolutionsResolvers from '/imports/api/resolutions/resolvers'
//hii



const typeDefs = [
    ResolutionsSchema,
    UserSchema
];

const resolvers = merge(ResolutionsResolvers, UserResolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

createApolloServer({schema});
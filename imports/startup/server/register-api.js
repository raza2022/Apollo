import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import ResolutionsSchema from '../../api/resolutions/resolutions.graphql';
import ResolutionsResolvers from '/imports/api/resolutions/resolvers'

import UserSchema from '../../api/users/User.graphql';
import UserResolvers from '/imports/api/users/resolvers'

import GoalsSchema from '../../api/goals/Goal.graphql';
import GoalsResolvers from '/imports/api/goals/resolvers'
//hiidsfsfsfdsf



const typeDefs = [
    GoalsSchema,
    ResolutionsSchema,
    UserSchema
];

const resolvers = merge(ResolutionsResolvers, UserResolvers, GoalsResolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

createApolloServer({schema});
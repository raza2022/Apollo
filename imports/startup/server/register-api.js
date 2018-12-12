import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'

import ResolutionsSchema from '../../api/resolutions/resolutions.graphql';

const testSchema = `type Query {
    hi : String
    resolutions: [Resolution]
}`;

const typeDefs = [
    testSchema,
    ResolutionsSchema
];

const resolvers = {
    Query: {
        hi(){
            return "Hello Apollo!"
        },
        resolutions(){
            return [
                {
                    _id: "asdsfsdf",
                    name: "Get staff done"
                },
                {
                    _id: "fffffff",
                    name: "Do something else"
                }

            ]
        }
    }
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({schema});
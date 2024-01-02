import { ApolloServer, ExpressContext } from "apollo-server-express"
import { GraphQLSchema } from "graphql"
import { readFileSync } from "fs"
import { join } from 'path';
const schemaPath = join(__dirname, 'schema.gql');

import { makeExecutableSchema } from "@graphql-tools/schema"
import Resolvers from "./resolvers"
const Schema = readFileSync(schemaPath, 'utf8') as string;


export default utils => {
    const server = new ApolloServer({
        typeDefs: Schema,
        resolvers: Resolvers.call(utils),
        context: ({ req }) => req
    });
    return server;
}
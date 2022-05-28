
import 'reflect-metadata'


import path from 'path'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'


import { userResolver } from './src/resolvers/userRouter';

async function main() {
    const schema = await buildSchema({
        resolvers: [userResolver],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })

    const server = new ApolloServer({ schema  })

    const { url } = await server.listen()
    console.log(`Running on ${url}`)
}

main()
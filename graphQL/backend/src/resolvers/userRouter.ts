import { User } from './../models/user';
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { randomUUID } from 'crypto';


@Resolver()
export class userResolver {

    private data: User[] = [];

    @Query(() => String)
    async ping() { return "Hello World" }

    @Query(() => [User])
    async users() {
        return this.data
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name') name:string
    ) {
        const user = { id: randomUUID(), name: name }

        this.data.push(user)
        return user
    }
}
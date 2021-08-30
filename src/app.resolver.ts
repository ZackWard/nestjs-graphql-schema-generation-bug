import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryInput } from './app.input';

@Resolver(() => String)
export class AppResolver {
    @Query(() => String)
    public async getString(@Args({ name: 'input' }) input: QueryInput): Promise<string> {
        return 'foo';
    }
}
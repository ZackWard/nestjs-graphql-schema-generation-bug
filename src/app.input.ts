import { Field, InputType, IntersectionType } from '@nestjs/graphql';

@InputType()
export class FooInput {

    // Uncomment line 7 and comment line 8 to demonstrate the unhandled exception
    @Field(() => [String], { nullable: 'items' })
    // @Field(() => [String])
    foo: string[];
}

@InputType()
export class BarInput {
    @Field(() => [String])
    bar: string[];
}

@InputType()
export class FooBarIntersectionInput extends IntersectionType(FooInput, BarInput) {}

@InputType()
export class QueryInput {
    @Field()
    fooInput: FooInput;

    @Field()
    barInput: BarInput;

    @Field()
    fooBarIntersectionInput: FooBarIntersectionInput;
}
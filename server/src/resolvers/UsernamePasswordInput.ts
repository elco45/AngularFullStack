import { InputType, Field } from "type-graphql";

@InputType()
export class UsernamePasswordInput {
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  password: string;
}

import { Field, ObjectType } from "type-graphql"
import { IResponse } from "./response.type"
import { UserModel } from "../entities/user.model"

// Array/Collection
@ObjectType({ implements: IResponse })
export class UserArrResponse implements IResponse {
    success: boolean
    msg: string

    @Field(() => [UserModel], { nullable: true })
    data?: UserModel[]
}

// Single
@ObjectType({ implements: IResponse })
export class UserObjectResponse implements IResponse {
    success: boolean
    msg: string

    @Field(() => UserModel, { nullable: true })
    data?: UserModel
}

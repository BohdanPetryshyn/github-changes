import {BaseEntity, Column, Entity, PrimaryColumn} from "typeorm";
import {Field, ObjectType} from "type-graphql";

@ObjectType()
@Entity()
export class RepoTrackedFolder extends BaseEntity{
    @Field()
    @PrimaryColumn()
    repoName: string;

    @Field()
    @Column()
    trackedFolder: string;
}
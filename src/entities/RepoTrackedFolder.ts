import {BaseEntity, Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class RepoTrackedFolder extends BaseEntity{
    @PrimaryColumn()
    repoName: string;

    @Column()
    trackedFolder: string;
}
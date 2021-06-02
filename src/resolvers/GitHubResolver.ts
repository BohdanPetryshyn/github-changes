import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {GitHubDiffService} from "../services/GitHubDiffService";
import {Service} from "typedi";
import {RepoTrackedFolder} from "../entities/RepoTrackedFolder";

@Resolver()
@Service()
export class GitHubResolver {
  constructor(private readonly diffService: GitHubDiffService) {}

  @Mutation(() => Boolean)
  async setTrackedFolder(
      @Arg('repoName') repoName: string,
      @Arg('trackedFolder') trackedFolder: string
  ) {
    await RepoTrackedFolder.create({ repoName, trackedFolder}).save();
    return true;
  }

  @Query(() => [String])
  changedFileNames(
      @Arg('repoOwner') repoOwner: string,
      @Arg('repoName') repoName: string,
      @Arg('base') base: string,
      @Arg('head') head: string
  ) {
    return this.diffService.getChangedFileNames(repoOwner, repoName, base, head);
  }
}

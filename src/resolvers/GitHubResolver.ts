import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {GitHubDiffService} from "../services/GitHubDiffService";
import {Service} from "typedi";
import {TrackedFolderService} from "../services/TrackedFolderService";
import {RepoTrackedFolder} from "../entities/RepoTrackedFolder";

@Resolver()
@Service()
export class GitHubResolver {
  constructor(private readonly diffService: GitHubDiffService, private readonly trackedFolderService: TrackedFolderService) {}

  @Mutation(() => RepoTrackedFolder)
  async setTrackedFolder(
      @Arg('repoName') repoName: string,
      @Arg('trackedFolder') trackedFolder: string
  ) {
    return this.trackedFolderService.setTrackedFolder(repoName, trackedFolder);
  }

  @Query(() => [String])
  changedFileNames(
      @Arg('repoName') repoName: string,
      @Arg('base') base: string,
      @Arg('head') head: string
  ) {
    return this.diffService.getChangedFileNames(repoName, base, head);
  }

  @Query(() => [String])
  changedTrackedFileNames(
      @Arg('repoName') repoName: string,
      @Arg('base') base: string,
      @Arg('head') head: string
  ) {
    return this.diffService.getChangedTrackedFileNames(repoName, base, head);
  }
}

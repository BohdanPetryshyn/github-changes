import {Arg, Query, Resolver} from "type-graphql";
import {GitHubDiffService} from "../services/GitHubDiffService";
import {Service} from "typedi";

@Resolver()
@Service()
export class GitHubResolver {
  constructor(private readonly diffService: GitHubDiffService) {}

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

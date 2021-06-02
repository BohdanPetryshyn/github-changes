import {GitHubApiClient} from "./GitHubApiClient";

export class GitHubDiffService {
    constructor(private readonly gitHubClient: GitHubApiClient) {
    }

    async getChangedFileNames(repoOwner: string, repoName: string, base: string, head: string): Promise<string[]> {
        const compareResponse = await this.gitHubClient.getDiff(repoOwner, repoName, base, head)

        return compareResponse.files
            .map(file => file.filename);
    }
}
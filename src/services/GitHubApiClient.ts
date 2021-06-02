import {AxiosInstance} from "axios";
import {GitHubCompareResponse} from "../entities/github/GitHubCompareResponse";

export class GitHubApiClient {
    private static readonly GIT_HUB_BASE_PATH = 'https://api.github.com';

    constructor(private readonly apiClient: AxiosInstance) {
    }

    async getDiff(repoOwner: string, repoName: string, base: string, head: string): Promise<GitHubCompareResponse> {
        const requestUrl = `${GitHubApiClient.GIT_HUB_BASE_PATH}/repos/${repoOwner}/${repoName}/compare/${base}...${head}`;

        const response = await this.apiClient.get(requestUrl);

        return response.data;
    }
}

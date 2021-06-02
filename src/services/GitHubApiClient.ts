import {AxiosInstance} from "axios";
import {GitHubCompareResponse} from "../entities/github/GitHubCompareResponse";
import {Inject, Service} from "typedi";
import {AXIOS_CLIENT} from "../context";

@Service()
export class GitHubApiClient {
    private static readonly GIT_HUB_BASE_PATH = 'https://api.github.com';

    constructor(
        @Inject(AXIOS_CLIENT)
        private readonly apiClient: AxiosInstance) {
    }

    async getDiff(repoName: string, base: string, head: string): Promise<GitHubCompareResponse> {
        const requestUrl = `${GitHubApiClient.GIT_HUB_BASE_PATH}/repos/${repoName}/compare/${base}...${head}`;

        const response = await this.apiClient.get(requestUrl);

        return response.data;
    }
}

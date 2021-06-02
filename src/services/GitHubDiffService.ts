import {GitHubApiClient} from "./GitHubApiClient";
import {Service} from "typedi";
import {TrackedFolderService} from "./TrackedFolderService";

@Service()
export class GitHubDiffService {
    constructor(
        private readonly gitHubClient: GitHubApiClient,
        private readonly trackedFolderService: TrackedFolderService
    ) {
    }

    async getChangedTrackedFileNames(repoName: string, base: string, head: string): Promise<string[]> {
        const changedFiles = await this.getChangedFileNames(repoName, base, head);
        if (changedFiles.length === 0) {
            return changedFiles;
        }

        const trackedFolder = await this.trackedFolderService.getTrackedFolder(repoName);
        if (!trackedFolder) {
            return changedFiles;
        }

        return changedFiles.filter(file => file.startsWith(trackedFolder));
    }

    async getChangedFileNames(repoName: string, base: string, head: string): Promise<string[]> {
        const compareResponse = await this.gitHubClient.getDiff(repoName, base, head)

        return compareResponse.files
            .map(file => file.filename);
    }
}
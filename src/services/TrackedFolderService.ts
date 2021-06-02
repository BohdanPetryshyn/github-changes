import {Service} from "typedi";
import {RepoTrackedFolder} from "../entities/RepoTrackedFolder";

@Service()
export class TrackedFolderService {
    async setTrackedFolder(repoName: string, trackedFolder: string): Promise<RepoTrackedFolder> {
        return RepoTrackedFolder.create({ repoName, trackedFolder }).save();
    }

    async getTrackedFolder(repoName: string): Promise<string | undefined> {
        const repoTrackedFolder = await RepoTrackedFolder.findOne(repoName);
        return repoTrackedFolder?.trackedFolder;
    }
}
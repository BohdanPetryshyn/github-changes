import {GitHubDiffService} from "../../src/services/GitHubDiffService";
import {GitHubApiClient} from "../../src/services/GitHubApiClient";
import {TrackedFolderService} from "../../src/services/TrackedFolderService";

const REPO_NAME = 'test/test';
const BASE_HASH = '123';
const HEAD_HASH = '321';

const FILE_NAME_1 = 'FILE_NAME_1';
const FILE_NAME_2 = 'FILE_NAME_2';
const FILE_NAME_3 = 'FILE_NAME_3';

describe('GitHubDiffService', () => {
    let gitHubApiClient: GitHubApiClient;
    let trackedFolderService: TrackedFolderService;

    let gitHubDiffService: GitHubDiffService;

    beforeEach(() => {
        gitHubApiClient = {} as GitHubApiClient;
        trackedFolderService = {} as TrackedFolderService;

        gitHubDiffService = new GitHubDiffService(
            gitHubApiClient,
            trackedFolderService
        );
    });

    describe('getChangedFileNames', () => {
        test('returns changed file names', () => {
            gitHubApiClient.getDiff = jest.fn().mockImplementation(() => Promise.resolve({
                files: [
                    { filename: FILE_NAME_1 },
                    { filename: FILE_NAME_2 },
                    { filename: FILE_NAME_3 },
                ]
            }));

            expect(gitHubDiffService.getChangedFileNames(REPO_NAME, BASE_HASH, HEAD_HASH))
                .resolves
                .toEqual([
                    FILE_NAME_1,
                    FILE_NAME_2,
                    FILE_NAME_3
                ])
        })
    })

    describe('getChangedTrackedFileNames', () => {
        test('returns empty array if there are no changes', () => {
            gitHubApiClient.getDiff = jest.fn().mockImplementation(() => Promise.resolve({
                files: []
            }));

            expect(gitHubDiffService.getChangedFileNames(REPO_NAME, BASE_HASH, HEAD_HASH))
                .resolves
                .toEqual([])
        })
    })
})
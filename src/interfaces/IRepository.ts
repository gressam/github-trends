import { IShortDeveloperInfo } from './IShortDeveloperInfo';
export interface IRepository {
    rank: number;
    username: string;
    repositoryName: string;
    url: string;
    description: string;
    language: string | null;
    languageColor: string | null;
    totalStars: number;
    forks: number;
    starsSince: number;
    since: string;
    builtBy: IShortDeveloperInfo[]
}

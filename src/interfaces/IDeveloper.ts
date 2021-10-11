import { IShortRepository } from './IShortRepository';
export interface IDeveloper {
    rank: number;
    username: string;
    name: string;
    url: string;
    avatar: string;
    since: string;
    popularRepository: IShortRepository;
}

import { IFilter } from 'src/interfaces/IFilter';
import { MapUrlWithFilters } from "src/utils/utils"

const getRepositories = async (filters: IFilter) => {
    return (await fetch(MapUrlWithFilters('https://gh-trending-api.herokuapp.com/repositories', filters), { mode: 'no-cors' })).json()
}

const getDevelopers = async (filters: IFilter) => {
    return (await fetch(MapUrlWithFilters('https://gh-trending-api.herokuapp.com/developers', filters), { mode: 'no-cors' })).json()
}

export {
    getRepositories,
    getDevelopers
}

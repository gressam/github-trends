import { useEffect, useState } from "react"
import { getRepositories } from "src/API/api"
import { IFilter } from "src/interfaces/IFilter"
import { IRepository } from "src/interfaces/IRepository"
import { RepositoryItem } from "./RepositortItem/RepositoryItem"

type RepositoriesTableProps = {
    filters: IFilter;
}

export const RepositoriesTable = (props: RepositoriesTableProps): JSX.Element => {

    const [repositories, setRepositories] = useState<IRepository[]>([])
    useEffect(() => {
        getRepositories(props.filters).then((data: IRepository[]) => { setRepositories(data) })
    }, [props.filters])

    return (
        <div className='repositories-table'>
            {repositories?.map(repository => (<RepositoryItem key={repository.rank} item={repository} />))}
        </div>)

}
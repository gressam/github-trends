import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getRepositories } from 'src/API/api';
import { IFilter } from 'src/interfaces/IFilter';
import { IRepository } from 'src/interfaces/IRepository';
import { RepositoryItem } from './RepositortItem/RepositoryItem';

type RepositoriesTableProps = {
  filters: IFilter;
};

export const RepositoriesTable = (props: RepositoriesTableProps): JSX.Element => {
  const query = useQuery('repositoriesRepo', () => getRepositories(props.filters), {
    enabled: false,
  });

  useEffect(() => {
    if (props.filters) {
      query.refetch();
    }
  }, [props.filters]);

  return (
    <div className="repositories-table">
      {query?.isLoading || query.isFetching ? (
        <div>Is Loading...</div>
      ) : (
        <React.Fragment>
          {query?.data?.length ? (
            query?.data?.map((repository: IRepository) => (
              <RepositoryItem key={repository.rank} item={repository} />
            ))
          ) : (
            <div>No data</div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

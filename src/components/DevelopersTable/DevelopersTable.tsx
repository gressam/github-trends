import { getDevelopers } from 'src/API/api';
import { IFilter } from 'src/interfaces/IFilter';
import { IDeveloper } from 'src/interfaces/IDeveloper';
import { DeveloperItem } from './DeveloperItem/DeveloperItem';
import { useQuery } from 'react-query';
import React, { useEffect } from 'react';

type DeveloperTableProps = {
  filters: IFilter;
};

export const DevelopersTable = (props: DeveloperTableProps): JSX.Element => {
  const query = useQuery('developersRepo', () => getDevelopers(props.filters), { enabled: false });

  useEffect(() => {
    if (props.filters) {
      query.refetch();
    }
  }, [props.filters]);

  return (
    <div className="users-table">
      {query?.isLoading || query.isFetching ? (
        <div>Is Loading...</div>
      ) : (
        <React.Fragment>
          {query?.data?.length ? (
            query?.data?.map((user: IDeveloper) => (
              <DeveloperItem key={user?.username} item={user} />
            ))
          ) : (
            <div>No data</div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

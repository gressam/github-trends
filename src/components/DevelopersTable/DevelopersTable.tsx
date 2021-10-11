// import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { getDevelopers } from 'src/API/api';
import { IFilter } from 'src/interfaces/IFilter';
import { IDeveloper } from 'src/interfaces/IDeveloper';
import { DeveloperItem } from './DeveloperItem/DeveloperItem';

type DeveloperTableProps = {
  filters: IFilter;
}

export const DevelopersTable = (props: DeveloperTableProps): JSX.Element => {

  const [developers, setDevelopers] = useState<IDeveloper[]>([])

  useEffect(() => {
    getDevelopers(props.filters).then((data: IDeveloper[]) => setDevelopers(data));
  }, [props.filters])

  return (
    <div className="users-table">
      {developers.map((user: IDeveloper) => (
        <DeveloperItem key={user?.username} item={user} />
      ))}
    </div>
  );
};

import { Button } from 'src/components/common/Button/Button';
import { IDeveloper } from 'src/interfaces/IDeveloper';
import './DeveloperItem.scss';

type userItemProps = {
  item: IDeveloper;
};

export const DeveloperItem = (props: userItemProps): JSX.Element => {
  const { item } = props;
  return (
    <div className="user-item">
      <div className="user-number">{item.rank}</div>
      <div className="user-profile">
        <div className="user-profile-image">
          <img alt="developer" src={item.avatar} />
        </div>
        <div className="user-profile-text">
          <div className="user-profile-title">{item.name}</div>
          <div className="user-profile-description">{item.username}</div>
        </div>
      </div>
      <div className="user-project-info">
        <div className="user-project-info-title">
          <svg height="16" viewBox="0 0 16 16" width="16">
            <path
              fillRule="evenodd"
              d="M7.998 14.5c2.832 0 5-1.98 5-4.5 0-1.463-.68-2.19-1.879-3.383l-.036-.037c-1.013-1.008-2.3-2.29-2.834-4.434-.322.256-.63.579-.864.953-.432.696-.621 1.58-.046 2.73.473.947.67 2.284-.278 3.232-.61.61-1.545.84-2.403.633a2.788 2.788 0 01-1.436-.874A3.21 3.21 0 003 10c0 2.53 2.164 4.5 4.998 4.5zM9.533.753C9.496.34 9.16.009 8.77.146 7.035.75 4.34 3.187 5.997 6.5c.344.689.285 1.218.003 1.5-.419.419-1.54.487-2.04-.832-.173-.454-.659-.762-1.035-.454C2.036 7.44 1.5 8.702 1.5 10c0 3.512 2.998 6 6.498 6s6.5-2.5 6.5-6c0-2.137-1.128-3.26-2.312-4.438-1.19-1.184-2.436-2.425-2.653-4.81z"
            ></path>
          </svg>
          Popular Repo
        </div>
        <div className="user-project-info-item">
          <svg height="16" viewBox="0 0 16 16" width="16">
            <path
              fillRule="evenodd"
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
            ></path>
          </svg>
          {item.popularRepository.repositoryName}
        </div>
        <div className="user-project-info-description">{item.popularRepository.description}</div>
      </div>
      <div className="user-buttons">
        <Button
          title={'Sponsor'}
          icon={
            <svg height="16" viewBox="0 0 16 16" width="16">
              <path
                fill="#bf3989"
                fillRule="evenodd"
                d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"
              ></path>
            </svg>
          }
        />
        <Button title="Follow" />
      </div>
    </div>
  );
};

import { useState, useCallback, useEffect } from 'react'
import { Route, useHistory } from 'react-router';
import { RepositoriesTable } from 'src/components/RepositoriesTable/RepositoriesTable';
import './Main.scss'
import { InputSelect } from 'src/components/common/InputSelect/InputSelect';
import { DEVELOPERS_TEXT, LANGUAGES, PROJECTS_TEXT, SPOKENLANGUAGES, TIMES } from 'src/utils/constants';
import { IFilter } from 'src/interfaces/IFilter';
import { ISelectItem } from 'src/interfaces/ISelectItem';
import { DevelopersTable } from 'src/components/DevelopersTable/DevelopersTable';



export const Main = () => {
    const [tab, setTab] = useState(0);
    const [filters, setFilters] = useState<IFilter>({ day: 'daily', language: '', });
    const history = useHistory();

    useEffect(() => {
        history.push(tab === 0 ? '/repositories' : '/users')
    }, [tab])

    const handleCategoryButtonClick = (tab: number) => {
        setTab(tab);
    }

    const getSubTitle = useCallback(() => tab ? DEVELOPERS_TEXT : PROJECTS_TEXT, [tab]);

    const hangleFilterSelect = (filter: keyof IFilter, item: ISelectItem) => {
        setFilters((prevFilter: IFilter): IFilter => ({ ...prevFilter, [filter]: item?.value || '' }))
    }

    return (

        <div className='github-page'>
            <div className='header'>
                <div className='header-title'>Trending</div>
                <div className='header-subtitle'>{getSubTitle()}</div>

            </div>
            <div className='page-body'>
                <div className='content'>
                    <div className='content-header'>
                        <div className='content-buttons'>
                            <div
                                className={`content-button ${tab === 0 ? 'selected' : ''}`}
                                onClick={() => handleCategoryButtonClick(0)}>
                                Repositories
                            </div>
                            <div
                                className={`content-button ${tab === 1 ? 'selected' : ''}`}
                                onClick={() => handleCategoryButtonClick(1)}>
                                Developers
                            </div>
                        </div>
                        <div className='filters'>
                            {tab === 0 && <InputSelect
                                clearText='Clear spoken language'
                                canSearch={true}
                                addClearLabel={true}
                                items={SPOKENLANGUAGES}
                                handleSelect={(event: ISelectItem) => hangleFilterSelect('spokenLanguage', event)}
                                title='Spoken Language:'
                                titleInSelect='Select a spoken language' />
                            }
                            <InputSelect
                                clearText='Clear language'
                                canSearch={true}
                                addClearLabel={true}
                                items={LANGUAGES}
                                handleSelect={(event: ISelectItem) => hangleFilterSelect('language', event)}
                                title='Language:'
                                titleInSelect='Select a language' />
                            <InputSelect
                                defaultValue='daily'
                                items={TIMES}
                                handleSelect={(event: ISelectItem) => hangleFilterSelect('day', event)}
                                title='Date range:' titleInSelect='Adjust time span' />
                        </div>
                    </div>
                    <div className='content-body'>
                        <Route exact={true} path='/repositories' render={
                            () => <RepositoriesTable filters={filters} />
                        } />
                        <Route exact={true} path='/users' render={() => <DevelopersTable filters={filters} />} />
                    </div>
                </div>
            </div>
        </div >
    )
}
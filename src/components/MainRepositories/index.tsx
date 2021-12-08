
import { FormSearchRepository } from './FormSearchRepository';
import { RepositoryItem } from './RepositoryItem';
import './style.css'
import { Repository } from '../../interfaces/repositorios';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

interface IProps {
    repos: Repository[];
    publicRepos: number;
}

const index = ({ repos, publicRepos }: IProps) => {

    const { loadingRepos } = useContext(SearchContext)
    console.log('hoiola')
    return (
        <div className="container_repositories_user">

            <h3 className="title_main_repositories">Repositories (<span>{publicRepos}</span>)</h3>

            <FormSearchRepository />

            <div className="divider" />

            {
                loadingRepos ? <div className="container_loading_repos">
                    <div className="sk-chase">
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                    </div>
                    <span>Loading repositories ...</span>
                </div>
                    : repos.map(repo => (
                        <RepositoryItem key={repo.id} repoInfo={repo} />
                    ))
            }

        </div>
    )
}

export default index

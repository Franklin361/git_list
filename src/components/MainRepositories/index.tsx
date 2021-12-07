
import { FormSearchRepository } from './FormSearchRepository';
import { RepositoryItem } from './RepositoryItem';
import './style.css'
import { Repository } from '../../interfaces/repositorios';

interface IProps{
    repos: Repository[];
    publicRepos:number;
}

const index = ({ repos, publicRepos }:IProps) => {
    return (
        <div className="container_repositories_user">

            <h3 className="title_main_repositories">Repositories (<span>{publicRepos}</span>)</h3>

            <FormSearchRepository/>            

            <div className="divider" />

            {
                repos.slice(0,5).map(repo => (
                    <RepositoryItem key={repo.id} repoInfo={repo}/>
                ))
            }

        </div>
    )
}

export default index

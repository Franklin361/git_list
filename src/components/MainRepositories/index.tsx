
import { FormSearchRepository } from './FormSearchRepository';
import { RepositoryItem } from './RepositoryItem';
import './style.css'

const index = () => {
    return (
        <div className="container_repositories_user">

            <h3 className="title_main_repositories">Repositories (<span>180</span>)</h3>

            <FormSearchRepository/>            

            <div className="divider" />

            <RepositoryItem/>
            <RepositoryItem/>
            <RepositoryItem/>
            <RepositoryItem/>
            <RepositoryItem/>

        </div>
    )
}

export default index

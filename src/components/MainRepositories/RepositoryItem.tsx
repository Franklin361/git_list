import { Icon } from '../IconSVG/index';

import './repositoryItem.css'
import { Repository } from '../../interfaces/repositorios';

interface IProps{
    repoInfo: Repository
}

export const RepositoryItem = ({ repoInfo }:IProps) => {
    console.log('reps')
    const getColortech = ():string => {
         
        switch (repoInfo.language?.toLowerCase()) {
            case 'css': return '#a75dd8';
            case 'javascript': return '#daa520';
            case 'typescript': return '#1b82aa';
        
            default: return 'grey';
        }
    }; 

    const getDateRepo = (date:string):string => {
        const dateFinal = new Date(date).toLocaleDateString('es-Es',{
            day:'2-digit',
            month:'2-digit',
            year:'numeric'
        })
        return dateFinal.toString()
    };

    return (
        <div className="repository">
            <div>
                <div className="container_title">
                    <h4 className="title_repository">{repoInfo.name}</h4>
                    <span className="type_repository">{repoInfo.visibility}</span>
                </div>
                <div className="container_star_git_updated">
                    <div className="stars">
                        <Icon name="start" size={18} />
                        <span className="start_number">{repoInfo.forks_count}</span>
                    </div>
                    <div className="git">
                        <Icon name="git" size={18} />
                        <span className="git_number">{repoInfo.watchers_count}</span>
                    </div>
                    <span className="updated_short">created { getDateRepo(repoInfo.created_at) }</span> {/* repoInfo.updated_at */}
                </div>
                
                <span className="description_project">
                    {
                        repoInfo.description ? repoInfo.description : 'No description'
                    }
                </span>

                <div className="container_tags">
                    {
                        repoInfo.topics.slice(0,2).map(topic =>(
                            <span className="item_tag" key={topic}>{topic}</span>
                        ))
                    }
                </div>

                <div className="container_details_down">
                    <div className="main_tech">
                        <div className={`circle`} style={{backgroundColor:`${getColortech()}`}} ></div>
                        <span className="tech_name">{repoInfo.language ?? 'No lenguaje'}</span>
                    </div>
                    <div className="start_mini">
                        <Icon name="start" size={18} />
                        <span className="start_mini_number">{repoInfo.watchers}</span>
                    </div>
                    <div className="git_mini">
                        <Icon name="git" size={18} />
                        <span className="git_mini_number">{repoInfo.forks}</span>
                    </div>
                    <div className="updated">
                        <span>Updated {getDateRepo(repoInfo.updated_at)}</span>
                    </div>
                </div>
            </div>

            <div className="container_box_2">
                <div className="box_start ">
                    <Icon name="start" size={22} />
                    <span>Start</span>
                </div>
            </div>

        </div>
    )
}

import { Icon } from '../IconSVG/index';

import './repositoryItem.css'

export const RepositoryItem = () => {
    return (
        <div className="repository">
            <div>
                <div className="container_title">
                    <h4 className="title_repository">taller-pokedex</h4>
                    <span className="type_repository">Public</span>
                </div>
                <div className="container_star_git_updated">
                    <div className="stars">
                        <Icon name="start" size={18} />
                        <span className="start_number">8</span>
                    </div>
                    <div className="git">
                        <Icon name="git" size={18} />
                        <span className="git_number">8</span>
                    </div>
                    <span className="updated_short">Updated 21 hours ago</span>
                </div>
                
                <span className="description_project">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium?</span>

                <div className="container_tags">
                    <span className="item_tag">javascript</span>
                    <span className="item_tag">css</span>
                    <span className="item_tag">html</span>
                </div>

                <div className="container_details_down">
                    <div className="main_tech">
                        <div className="circle"></div>
                        <span className="tech_name">Javascript</span>
                    </div>
                    <div className="start_mini">
                        <Icon name="start" size={18} />
                        <span className="start_mini_number">800</span>
                    </div>
                    <div className="git_mini">
                        <Icon name="git" size={18} />
                        <span className="git_mini_number">50</span>
                    </div>
                    <div className="updated">
                        <span>Updated 2 days ago</span>
                    </div>
                </div>
            </div>

            <div className="container_box_2">
                <div className="box_start">
                    <Icon name="start" size={22} />
                    <span>Start</span>
                </div>
            </div>

        </div>
    )
}

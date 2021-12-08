
import './style.css'
import { Icon } from '../IconSVG/index';
import { User } from '../../interfaces/user';

const url = 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

interface IPros{
    user: User
}

const index = ({user}:IPros) => {
    
    return (
        <aside className="container">

            <div className="profile-info">
                <div className="image-profile">
                    <img src={user.avatar_url} />
                </div>
                <div className="profile-names">
                    <h1 className="name">{user.name}</h1>
                    <h2 className="username">{user.login}</h2>
                </div>
            </div>

            <div className="info_user">

                <div className="container_btn">
                    <button className="btn follow" >Follow</button>
                    <button className="btn sponsor" >
                        <Icon name="heart" size={20} />
                        Sponsor
                    </button>
                </div>

                <div className="details-profile">

                    <h3 className="ocuppation">{user.bio}</h3>

                    <div className="inline-movil-property">
                        <div className="follow_details">
                            <div className="container_icon_follow followers">
                                <Icon name="users" /> <span className="bold">{user.followers}</span> <span>Followers</span> <span> ●</span>
                            </div>
                            <div className="following">
                                <span className="bold">{user.following}</span> <span>Following</span> <span> ● </span>
                            </div>
                        </div>
                        <div className="container_icon starts">
                            <Icon name="start" /> <span className="bold"> { user.public_repos }</span>
                        </div>

                    </div>

                    <div className="container_icon address">
                        <Icon name="map" /><span> {user.location}</span>
                    </div>

                    <div className="container_icon website">
                        <Icon name="link" /> <span> {user.blog}</span>
                    </div>

                    <div className="container_icon twitter">
                        <Icon name="twitter" /> <span>  @{user.twitter_username} </span>
                    </div>
                </div>

            </div>
        </aside>
    )
}

export default index

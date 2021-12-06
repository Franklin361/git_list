
import './style.css'
import { Icon } from '../IconSVG/index';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

const url = 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

const index = () => {
    
    return (
        <aside className="container">

            <div className="profile-info">
                <div className="image-profile">
                    <img src={url} />
                </div>
                <div className="profile-names">
                    <h1 className="name">Franklin Martinez Lucas</h1>
                    <h2 className="username">Franklin Martinez Lucas</h2>
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

                    <h3 className="ocuppation">Software Engineer, Profesor</h3>

                    <div className="inline-movil-property">
                        <div className="follow_details">
                            <div className="container_icon_follow followers">
                                <Icon name="users" /> <span className="bold">4.6k</span> <span>Followers</span> <span> ●</span>
                            </div>
                            <div className="following">
                                <span className="bold">60</span> <span>Following</span> <span> ● </span>
                            </div>
                        </div>
                        <div className="container_icon starts">
                            <Icon name="start" /> <span className="bold"> 81</span>
                        </div>

                    </div>

                    <div className="container_icon address">
                        <Icon name="map" /><span> Ciudad de México</span>
                    </div>

                    <div className="container_icon website">
                        <Icon name="link" /> <span> https://franklin-dev.vercel.app</span>
                    </div>

                    <div className="container_icon twitter">
                        <Icon name="twitter" /> <span>  @FranklinMartinez </span>
                    </div>
                </div>

            </div>
        </aside>
    )
}

export default index

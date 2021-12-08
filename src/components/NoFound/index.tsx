
import './style.css';

import nofound from "../../assets/nofound.gif";

const index = () => {

    return (
        <div className="no-found-container">
            <b className="line-noFound">No results</b>
            <div className="contaier_gif">
                <img src={nofound} alt="No found"/>
            </div>
            <button className="back_btn" onClick={ ()=> window.location.reload()}>Go back</button>
        </div>
    )
}

export default index

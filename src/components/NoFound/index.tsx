
import './style.css'
const index = () => {

    return (
        <div className="no-found-container">
            <span className="line-noFound">No results</span>
            <button className="back_btn" onClick={ ()=> window.location.reload()}>Go back</button>
        </div>
    )
}

export default index

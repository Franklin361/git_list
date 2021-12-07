
import './style.css'

const index = () => {
    return (
       <div className="container_spinner">
            <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
        </div>
        <p className="labelLoader">Cargando ...</p>
       </div>
    )
}

export default index

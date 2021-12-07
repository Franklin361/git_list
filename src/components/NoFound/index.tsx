import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext';

import './style.css'
const index = () => {

    const { search } = useContext(SearchContext)

    return (
        <div className="no-found-container">
            <span className="line-noFound">No results with <b>"{search}"</b></span>
            <button className="back_btn" onClick={ ()=> window.location.reload()}>Go back</button>
        </div>
    )
}

export default index

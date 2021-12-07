
import { LegacyRef, RefObject, useRef } from 'react';
import { Icon } from '../IconSVG';
import './style.css';
import { useForm } from '../../hooks/useForm';

const index = () => {

    const inputRef = useRef() as RefObject<HTMLInputElement>;
    const ref = useRef(inputRef.current?.checked);

    const { form, handleSubmit, onChange } = useForm();

    return (
        <>
            <label className="container_icon_search" htmlFor="modal_user">
                <Icon name="search" size={30}/>
            </label> 

            <input 
                type="checkbox" 
                id="modal_user" 
                className="modal_user" 
                ref={inputRef}
                checked={ref.current}
            />

            <label className="overlay_back" htmlFor="modal_user"/>

            <form className={`modal_search_user`} onSubmit={handleSubmit}>
                <label htmlFor="userinput" className="title_modal">Search any user</label>
                <input 
                    type="text" 
                    id="userinput" 
                    className="input_user" 
                    placeholder="Username"
                    onChange={onChange}
                    value={form}
                />
                <button className="btn_modal_user" type="submit">
                    <label htmlFor="modal_user">Buscar</label>
                </button>
            </form>  
        </>
    )
}

export default index

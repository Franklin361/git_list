import { useContext } from 'react';
import { Icon } from '../IconSVG/index';

interface IProps {
    name: string;
    label: string;
    options?: string[];
}

import './inputFilter.css'
import { SearchContext } from '../../context/SearchContext';

export const InputFilter = ({ name, label, options }: IProps) => {

    const { filterRepository } = useContext(SearchContext)

    const handleClick = (opt:string) => {
        filterRepository(opt,name)
    };


    return (
        <div className="container_select_input">
            <label className="input_select" htmlFor={label}>
                <span>{name}</span>
                <Icon name="dropdown" color="#fffffe" />
            </label>

            <input type="checkbox" id={label} />

            <label htmlFor={label} className="bg_overlay_sort" />

            <div className="container_list_options">
                <div className="default">
                Selecciona una opion
                    <label htmlFor={label}><Icon name="close"/></label>
                </div>
                {
                    options?.map((opt, i) => (
                        <label 
                            key={opt} 
                            className={`item_option ${(options.length === i + 1) && 'no-border'}`} 
                            htmlFor={label}
                            onClick={()=>handleClick(opt)}
                        > {opt} </label>
                    ))
                }
            </div>
        </div>
    )
}

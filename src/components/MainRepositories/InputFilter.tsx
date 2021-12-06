import { Icon } from '../IconSVG/index';

interface IProps {
    name: string;
    label: string;
    options?: string[];
}

import './inputFilter.css'

export const InputFilter = ({ name, label, options }: IProps) => {
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
                        <label className={`item_option ${(options.length === i + 1) && 'no-border'}`} key={opt} htmlFor={label}> {opt} </label>
                    ))
                }
            </div>
        </div>
    )
}

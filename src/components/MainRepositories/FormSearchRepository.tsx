import { Icon } from '../IconSVG/index';

import './formRepository.css'
import { InputFilter } from './InputFilter';
import { useForm } from '../../hooks/useForm';

export const FormSearchRepository = () => {

    const { form, handleSubmit, onChange } = useForm()

    return (
        <form className="container_inputs_find" onSubmit={handleSubmit}>

            <input 
                className="input_filter" 
                type="text" 
                placeholder="Find a repository" 
                value={form}
                onChange={onChange}
            />
        
            <div className="container_btn_filter" >
                <InputFilter name="Type" label="op1" options={["All", "Public"]} />
                <InputFilter name="Languaje" label="op2" options={["Javascript", "Typescript", "Csharp"]}/>
                <InputFilter name="Sort" label="op3" options={["Last Updated", "Name", "Stars"]}/>
            </div>
        </form>
    )
}

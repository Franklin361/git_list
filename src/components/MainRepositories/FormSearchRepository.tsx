
import './formRepository.css'
import { InputFilter } from './InputFilter';
import { useForm } from '../../hooks/useForm';
import { useDebounce } from '../../hooks/useDebounce';
import { SearchContext } from '../../context/SearchContext';
import { useContext } from 'react';

export const FormSearchRepository = () => {

    const {repos} = useContext(SearchContext)
    const { form, onChange } = useForm();
    useDebounce(form, 500);

    const getLanguajes = ():string[] => {
        return  [...new Set(repos.map(repo => repo.language))].filter(Boolean) as []
    };

    return (
        <div className="container_inputs_find">

            <input 
                className="input_filter" 
                type="text" 
                placeholder="Find a repository" 
                value={form}
                onChange={onChange}
            />
        
            <div className="container_btn_filter" >
                <InputFilter name="Type" label="op1" options={["All", "Member", "Owner"]} />
                <InputFilter name="Languaje" label="op2" options={getLanguajes()}/>
                <InputFilter name="Sort" label="op3" options={["Created","Updated","pushed","Full Name"]}/>
            </div>
        </div>
    )
}

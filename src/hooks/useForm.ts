import { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';

export const useForm = () => {

    const [form, setForm] = useState("");
    const { searchUser } = useContext(SearchContext);

    const onChange = ({target}:React.ChangeEvent<HTMLInputElement>) => {
        setForm( target.value ) 
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(form.trim().length !== 0) searchUser(form);
    };

    return {
        form,
        onChange,
        handleSubmit    
    }
}

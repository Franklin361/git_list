import { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';

type Search = 'repository' | 'user';
type FormEvent =  React.FormEvent<HTMLFormElement> | HTMLFormElement;

export const useForm = () => {

    const [form, setForm] = useState("");
    const { searchUser } = useContext(SearchContext);

    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setForm(target.value)
    };

    const handleSubmit = (e: FormEvent, typeSubmit:Search) => {
        e.preventDefault();
        if(form.trim().length !== 0){
            
            if(typeSubmit === 'user') searchUser(form);
            
            setForm("");
        };
    };

    return {
        form,
        onChange,
        handleSubmit
    }
}

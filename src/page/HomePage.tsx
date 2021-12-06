import { useEffect, useState, useContext } from 'react';
import AsideAboutMe from "../components/AboutMe";
import Repositories from "../components/MainRepositories";
import SearchUser from "../components/SearchUser";
import { User } from '../interfaces/user';
import { SearchContext } from '../context/SearchContext';

export const HomePage = () => {
    // const [user, setUser] = useState<User>();
    // const { search } = useContext(SearchContext);
    

    // useEffect(() => {

    //     const fetchData = async () => {
            
    //         if(search.trim().length === 0) return;
            
    //         const res = await fetch(`https://api.github.com/users/${search}`);
    //         const userData = await res.json() as User;
    //         console.log(userData)
    //     };

    //     // fetchData();

    // }, [search])

    return (
        <div className="grid">
            <AsideAboutMe />
            <Repositories />
            <SearchUser/>
        </div>
    )
}

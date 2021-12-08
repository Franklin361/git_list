import { createContext, useState } from "react"
import { User } from '../interfaces/user';
import { Repository } from '../interfaces/repositorios';

interface ISearch {
    user: User;
    repos: Repository[];
    searchRepos: Repository[];
    loading: boolean;
    searchUser: (user: string) => void;
    searchRepository: (repository: string) => void;
}

export const SearchContext = createContext({} as ISearch);

export const SearchProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<User>({} as User);
    const [repos, setRepos] = useState<Repository[]>([]);
    const [searchRepos, setSearchRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);

    const searchUser = async (user: string) => {
        try {
            
            setLoading(true)
            setSearchRepos([]);
            const fetchUser = await fetch(`https://api.github.com/users/${user}`);
            const userData = await fetchUser.json() as User;
            setUser(userData);
            
            const fetchRepos = await fetch(`${userData.repos_url}?per_page=15`);
            
            const reposData = await fetchRepos.json() as Repository[];
            setRepos(reposData);
            setLoading(false);

        } catch (error) {
            setLoading(false)
            setRepos([])
            setSearchRepos([])
            setUser({} as User)
        }
    };

    const searchRepository = async(repository: string) => {
        const searchRepos = repos.filter(repo => repo.name.toLowerCase().includes(repository.toLowerCase()));
        if(searchRepos.length === 0) alert(`No Found repository whit name: ${repository}`)
        setSearchRepos(searchRepos);
    };

    return (
        <SearchContext.Provider
            value={{
                searchUser,
                searchRepository,searchRepos,
                user,
                repos,
                loading,
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}

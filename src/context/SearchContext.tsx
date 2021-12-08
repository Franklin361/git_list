import { createContext, useState } from "react"
import { User } from '../interfaces/user';
import { Repository } from '../interfaces/repositorios';

interface ISearch {
    user: User;
    repos: Repository[];
    searchRepos: Repository[];
    loading: boolean;
    loadingRepos: boolean;
    searchUser: (user: string) => void;
    searchRepository: (repository: string) => void;
    filterRepository: (opt: string, typeFilter: string) => void;
}

export const SearchContext = createContext({} as ISearch);

export const SearchProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<User>({} as User);
    const [repos, setRepos] = useState<Repository[]>([]);
    const [searchRepos, setSearchRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingRepos, setLoadingRepos] = useState(true);

    const searchUser = async (user: string) => {
        try {

            setLoading(true)
            setSearchRepos([]);

            const fetchUser = await fetch(`https://api.github.com/users/${user}`);
            const userData = await fetchUser.json() as User;
            setUser(userData);

            await searchReposUser(userData.repos_url);

            setLoading(false);

        } catch (error) {
            setLoading(false)
            setLoadingRepos(false);
            resetState();
        }
    };

    const searchReposUser = async (url: string) => {
        const fetchRepos = await fetch(`${url}?per_page=15`);
        const reposData = await fetchRepos.json() as Repository[];
        setLoadingRepos(false);
        if (reposData.length !== 0) setRepos(reposData);
        else resetState();
    };

    const resetState = () => {
        setRepos([])
        setSearchRepos([])
        setUser({} as User)
        setLoadingRepos(false);
    };

    const searchRepository = async (repository: string) => {
        const searchRepos = repos.filter(repo => repo.name.toLowerCase().includes(repository.toLowerCase()));
        if (searchRepos.length === 0) alert(`No Found repository whit name: ${repository}`)
        setSearchRepos(searchRepos);
    };

    const filterRepository = async(opt: string, typeFilter: string) => {
        setLoadingRepos(true);
        if (typeFilter.toLowerCase() !== 'languaje') {
            const value = opt.toLowerCase();
            const key = typeFilter.toLowerCase();

            const url = `https://api.github.com/users/${user.login}/repos?per_page=15&${key}=${value}`;

            const fetchRepos = await fetch(url);
            const reposData = await fetchRepos.json() as Repository[];
            if (reposData.length !== 0){ setSearchRepos(reposData); setLoadingRepos(false);}
            else resetState();

        } else {
            setSearchRepos(repos.filter(repo => repo.language?.toLowerCase() === opt.toLowerCase()));
            setLoadingRepos(false);
        }
        
    };

    return (
        <SearchContext.Provider
            value={{
                searchUser,
                searchRepository, searchRepos,
                filterRepository,
                user,
                repos,
                loading,
                loadingRepos
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}

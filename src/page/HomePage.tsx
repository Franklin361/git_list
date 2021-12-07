import { useEffect, useState, useContext } from 'react';
import AsideAboutMe from "../components/AboutMe";
import Repositories from "../components/MainRepositories";
import SearchUser from "../components/SearchUser";
import NoFound from "../components/NoFound";
import Loading from "../components/Loading";
import { User } from '../interfaces/user';
import { SearchContext } from '../context/SearchContext';
import { Repository } from '../interfaces/repositorios';

export const HomePage = () => {
    const [user, setUser] = useState<User>({} as User);
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);

    const { search } = useContext(SearchContext);


    useEffect(() => {
        const fetchData = async () => {

            try {
                setLoading(true)
                const fetchUser = await fetch(`https://api.github.com/users/${(search.length === 0) ? 'Franklin361' : search}`);
                const userData = await fetchUser.json() as User;
                setUser(userData);

                const fetchRepos = await fetch(userData.repos_url);
                const reposData = await fetchRepos.json() as Repository[];
                setRepos(reposData);
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setRepos([])
                setUser({} as User)
            }

        };

        fetchData();

    }, [search])

    if (loading) {
        return <Loading/>
    }

    return (
        <>
            {

                user.id
                    ? <div className="grid">
                        <AsideAboutMe user={user} />
                        {repos.length !== 0 && <Repositories repos={repos} publicRepos={user.public_repos} />}
                        <SearchUser />
                    </div>

                    : <NoFound />
            }
        </>
    )
}

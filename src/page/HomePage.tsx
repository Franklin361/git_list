import { useContext, useEffect } from 'react';
import AsideAboutMe from "../components/AboutMe";
import Repositories from "../components/MainRepositories";
import SearchUser from "../components/SearchUser";
import NoFound from "../components/NoFound";
import Loading from "../components/Loading";

import { SearchContext } from '../context/SearchContext';


export const HomePage = () => {

    const { loading, repos, searchRepos, user, searchUser } = useContext(SearchContext);

    useEffect(() => {
        searchUser('Franklin361')
    }, [])

    if (loading) {
        return <Loading />
    }
    
    return (
        <>
            {

                user?.id
                    ? <div className="grid">
                        <AsideAboutMe user={user} />
                        {
                            repos.length !== 0 
                            &&  <Repositories repos={ searchRepos.length !== 0 ? searchRepos : repos } publicRepos={user.public_repos} />
                        }
                        <SearchUser />
                    </div>

                    : <NoFound />
            }
        </>
    )
}

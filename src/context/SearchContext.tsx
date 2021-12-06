import { createContext, useState } from "react"

interface ISearch {
    searchUser: (user: string) => void;
    search:string
}

export const SearchContext = createContext({} as ISearch);

export const SearchProvider:React.FC = ({children}) => {

    const [search, setSearch] = useState("");

    const searchUser = (user:string) => {
        setSearch(user)
    };

    return (
        <SearchContext.Provider 
            value={{
                searchUser,
                search
            }}
        >
         { children }   
        </SearchContext.Provider>
    )
}

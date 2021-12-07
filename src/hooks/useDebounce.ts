import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext';

export const useDebounce = (value: string, delay:number) => {
    
    const {searchRepository} = useContext(SearchContext)
    useEffect(
        () => {
            
            const handler = setTimeout(() => {
                searchRepository(value);
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay]
    );
    
}

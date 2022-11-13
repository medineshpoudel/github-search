import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';

const AppContext = createContext();
const API = 'https://api.github.com/search/repositories';
const initialState = {
    isLoading: true,
    isError: true,
    query: null,
    page: 0,
    per_page: 5,
    no_of_page: 10,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async (url) => {
        dispatch({ type: 'LOADING' });
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({
                type: 'GET_REPO',
                payload: {
                    items: data,
                },
            });
        } catch (error) {
            dispatch({ type: '' });
        }
    };
    const searchChanges = (searchText) => {
        dispatch({ type: 'SEARCH_REPO', payload: searchText });
    };
    const itemPerPage = (page) => {
        dispatch({ type: 'ITEMS_PER_PAGE', payload: page });
    };

    const getPrevPage = () => {
        dispatch({ type: 'PREV_PAGE' });
    };
    const getNextPage = () => {
        dispatch({ type: 'NEXT_PAGE' });
    };

    useEffect(() => {
        if (state.query?.length == 0) {
            dispatch({ type: 'LOADING' });
        } else {
            fetchApiData(`${API}?q=${state.query}&page=${state.page}&per_page=${state.per_page}`);
        }
    }, [state.query, state.page, state.per_page]);

    return (
        <AppContext.Provider value={{ ...state, searchChanges, itemPerPage, getPrevPage, getNextPage }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
export default AppProvider;

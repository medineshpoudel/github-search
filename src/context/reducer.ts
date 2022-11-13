const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_REPO':
            return {
                ...state,
                isLoading: false,
                isError: false,
                items: action.payload.items,
            };
        case 'LOADING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case 'SEARCH_REPO':
            return {
                ...state,
                query: action.payload,
            };
        case 'SEARCH_ERROR':
            return {
                ...state,
                isError: true,
                isLoading: false,
            };
        case 'ITEMS_PER_PAGE':
            return {
                ...state,
                per_page: action.payload,
            };

        case 'NEXT_PAGE':
            let increasePage = state.page == 0 ? state.page + 2 : state.page + 1;
            if (increasePage >= state.no_of_page) {
                increasePage = 0;
            }
            return {
                ...state,
                page: increasePage,
            };
        case 'PREV_PAGE':
            let decreasePage = state.page - 1;
            if (decreasePage <= 0) {
                decreasePage = 1;
            }
            return {
                ...state,
                page: decreasePage,
            };
    }
    return;
};

export default reducer;

const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name,
});

const setCategories = (catIndex) => ({
    type: 'SET_CATEGORIES',
    payload: catIndex,
});
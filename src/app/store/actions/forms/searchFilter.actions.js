export function setSearchForm( payload ){
  return{
    type: 'SET_SEARCH',
    payload
  };
};

export function setSearchSource( payload ){
  return{
    type: 'SET_SEARCH_SOURCE',
    payload
  };
};

const initialState = {source:"newsapi", query: "", country: "gb", category: "health"};
const searchFilter = (state = initialState, actions)=>{
  switch(actions.type){
    case 'SET_SEARCH':
    {
      return{
        state : actions.payload
      }
    }
    default:
    {
      return state
    }
  };
};

export default searchFilter;

const initialState = {sourceState:'newsapi'};
const searchFilter = (state = initialState, actions)=>{
  switch(actions.type){
    case 'SET_SEARCH':
    {
      return{
        sourceState: actions.payload
      }
    }
    default:
    {
      return state
    }
  }
}

export default searchFilter;

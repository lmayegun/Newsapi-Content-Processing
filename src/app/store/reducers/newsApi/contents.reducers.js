const initialState = {};
const newsApi = function ( state = initialState, action){
  switch(action.type){
    case 'NEWSAPI_CONTENT_SUCCESS':
    {
      return{
        contents: action.payload
      }
    }
    default:
    {
      return state
    }
  }
}

export default newsApi;

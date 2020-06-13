const initialState = {};
const newsApi = function ( state = initialState, action){
  switch(action.type){
    case 'NEWSAPI_CONTENTS_SUCCESS':
    {
      return{
        ...state,
        contents: action.payload
      }
    }
    case 'NEWSAPI_CONTENT_SUCCESS':
    {
      return{
        ...state,
        content: action.payload
      }
    }
    default:
    {
      return state
    }
  }
}

export default newsApi;

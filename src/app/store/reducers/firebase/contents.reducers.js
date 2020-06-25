const initialState = {

};

const firebase = function ( state = initialState, action){
  switch(action.type){
    case 'GET_FIREBASE_CONTENTS_SUCCESS':
    {
      return{
        ...state,
        contents: action.payload
      }
    }
    case 'DELETE_FIREBASE_CONTENT_SUCCESS':
    {
      const filter = state.contents.filter(content => content.id !== action.payload );
      return{
        ...state,
        contents: filter
      }
    }
    default:
    {
      return state
    }
  }
}

export default firebase;

const initialState = {

};

const firebase = function ( state = initialState, action){
  switch(action.type){
    case 'GET_FIREBASE_CONTENTS_SUCCESS':
    {
      return{
        ...state,
        firebaseContents: action.payload
      }
    }
    case 'SET_FIREBASE_CONTENT_SUCCESS':
    {
      return{
        ...state,
        firebaseContent: action.payload
      }
    }
    case 'DELETE_FIREBASE_CONTENT_SUCCESS':
    {
      const filter = state.firebaseContents.filter(content => content.id !== action.payload );
      return{
        ...state,
        firebaseContents: filter
      }
    }
    default:
    {
      return state
    }
  };
};

export default firebase;

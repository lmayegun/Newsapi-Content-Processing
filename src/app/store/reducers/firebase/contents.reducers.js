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
    default:
    {
      return state
    }
  }
}

export default firebase;

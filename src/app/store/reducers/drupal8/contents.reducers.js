const initialState = {

};

const drupal8 = function ( state = initialState, action){
  switch(action.type){
    case 'GET_D8_CONTENTS_SUCCESS':
    {
      return{
        ...state,
        firebaseContents: action.payload
      }
    }
    case 'SET_D8_CONTENT_SUCCESS':
    {
      return{
        ...state,
        firebaseContent: action.payload
      }
    }
    case 'DELETE_D8_CONTENT_SUCCESS':
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

export default drupal8;

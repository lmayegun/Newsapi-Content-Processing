const initialState = {

};

const drupal8 = function ( state = initialState, action){
  switch(action.type){
    case 'GET_D8_CONTENTS_SUCCESS':
    {
      return{
        ...state,
        drupal8Contents: action.payload
      }
    }
    case 'SET_D8_CONTENT_SUCCESS':
    {
      return{
        ...state,
        drupal8Content: action.payload
      }
    }
    case 'DELETE_D8_CONTENT_SUCCESS':
    {
      const filter = state.drupal8Contents.filter(content => content.id !== action.payload );
      return{
        ...state,
        drupal8Contents: filter
      }
    }
    default:
    {
      return state
    }
  };
};

export default drupal8;

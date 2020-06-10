const initialState = {};

const settings = function (state = initialState, action){
  switch(action.type){
    case 'SAMPLE_SUCCESS':
    {
      return { settingSample: true}
    }
    default:
    {
      return state;
    }
  }
}

export default settings;

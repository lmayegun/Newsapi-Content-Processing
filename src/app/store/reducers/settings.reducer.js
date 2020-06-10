const initialState = {};

const settings = function (state = initialState, action){
  switch(action.type){
    case 'SAMPLE':
    {
      alert("sfsff");
      return { settingSample: true}
    }
    default:
    {
      return state;
    }
  }
}

export default settings;

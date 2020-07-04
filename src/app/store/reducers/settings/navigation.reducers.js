function navigation(state = {sourcePathState:'newsapi'}, actions){
  switch (actions.type){
    case 'SET_PATH':
    {
      return{
        ...state,
        sourcePathState: actions.payload
      }
    }
    default:
    {
      return state;
    }
  }
}

export default navigation;

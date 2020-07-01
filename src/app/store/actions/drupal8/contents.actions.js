export function getDrupal8Contents( payload ){
  return{
    type: "GET_D8_CONTENTS",
    payload
  };
};

export function setContent( payload ){
  return{
    type: "SET_D8_CONTENT",
    payload
  };
};

export function createContent( payload ){
  return{
    type: "CREATE_D8_CONTENT",
    payload
  };
};

export function deleteContent( payload ){
  return{
    type: "DELETE_D8_CONTENT",
    payload
  };
};

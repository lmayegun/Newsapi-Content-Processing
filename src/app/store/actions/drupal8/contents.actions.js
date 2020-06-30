export function getDrupal8Contents( payload ){
  return{
    type: "GET_D8_CONTENTS",
    payload
  };
};

export function setDrupal8Content( payload ){
  return{
    type: "SET_D8_CONTENT",
    payload
  };
};

export function deleteDrupal8Content( payload ){
  return{
    type: "DELETE_D8_CONTENT",
    payload
  };
};

export function getFirebaseContents( payload ){
  return{
    type: "GET_FIREBASE_CONTENTS",
    payload
  };
};

export function deleteContent( payload ){
  return{
    type: "DELETE_FIREBASE_CONTENT",
    payload
  };
};

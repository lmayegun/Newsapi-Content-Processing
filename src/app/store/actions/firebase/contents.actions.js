export function getFirebaseContents( payload ){
  return{
    type: "GET_FIREBASE_CONTENTS",
    payload
  };
};

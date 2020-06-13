import * as firebase from 'firebase';
import {firebaseConfig} from 'config/apiKeys';

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export { firebase, database as default };

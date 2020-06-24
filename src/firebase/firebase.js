import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {firebaseConfig} from 'config/apiKeys';

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export { firebase, database as default };

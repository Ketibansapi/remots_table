import * as firebase from 'firebase';

// TODO: fill in your firebase config
var firebaseConfig = {
    apiKey: "AIzaSyBA124HKHncysA2XH6PXOZS23UsFmchKQQ",
    authDomain: "remo-76c21.firebaseapp.com",
    databaseURL: "https://remo-76c21.firebaseio.com",
    projectId: "remo-76c21",
    storageBucket: "remo-76c21.appspot.com",
    messagingSenderId: "15993064127",
    appId: "1:15993064127:web:a60c2d392790666695540a",
    measurementId: "G-796BMWXP11"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
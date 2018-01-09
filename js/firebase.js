// Initialize Firebase
var config = {
  apiKey: "AIzaSyC7TKqhiaQ-d_cWIecbVPxZvn3JOYgo9ls",
  authDomain: "test-5f0a4.firebaseapp.com",
  databaseURL: "https://test-5f0a4.firebaseio.com",
  projectId: "test-5f0a4",
  storageBucket: "test-5f0a4.appspot.com",
  messagingSenderId: "470132296518"
};

firebase.initializeApp(config);

// Creando instancia del objeto del proveedor de Google
var provider = new firebase.auth.GoogleAuthProvider();
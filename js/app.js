// Evento para el botón Inicia sesión
$('#login').on('click', function () {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    console.log(result.user);
    save(result.user);
    // $('#login').hide();
    $('#root').append('<h3>' + result.user.displayName + '</p>');
    $('#root').append('<img src="' + result.user.photoURL + '"/>');
  });
});

// Función para guardar automáticamente
function save(user) {
  var usuario = {
    uid: user.uid,
    nombre: user.displayName,
    email: user.email,
    foto: user.photoURL
  }
  firebase.database().ref("test/" + user.uid).set(usuario);
};

// Evento para crear la base de datos
// $('#save').on('click', function() {
//     firebase.database().ref("test").set({
//         //name: "Milagros",
//         //age: 11
//     })
// });

// Leyendo de la BD
firebase.database().ref('telmex').on('child_added', function (event) {
  var eventValue = event.val();
  console.log(eventValue);
  $('#root').append('<img src="' + eventValue.photo + '"/>');
});
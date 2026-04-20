function login() {
  let usuario = document.getElementById("usuario").value;
  let password = document.getElementById("password").value;

  if(usuario === "admin" && password === "1234") {
    window.location.href = "home.html";
  } else {
    alert("Datos incorrectos");
  }
}
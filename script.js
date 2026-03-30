function login() {
  let u = document.getElementById("usuario").value;
  let p = document.getElementById("password").value;

  if (u === "" || p === "") {
    document.getElementById("mensaje").innerText = "Campos obligatorios";
    return;
  }

  if (u === "admin" && p === "123") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("mensaje").innerText = "Credenciales incorrectas";
  }
}

function registrar() {
  let u = document.getElementById("nuevoUsuario").value;

  if (u === "") {
    alert("Debe ingresar un usuario");
  } else {
    alert("Usuario registrado correctamente");
  }
}

function logout() {
  window.location.href = "index.html";
}

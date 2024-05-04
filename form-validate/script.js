let inputEmail = document.getElementById("input-email");
let inputSenha = document.getElementById("input-senha");
let formLogin = document.getElementById("form-login");
let emailError = document.getElementById("email-error");
let senhaError = document.getElementById("senha-error");

formLogin.addEventListener("submit", function (event) {
  let emailLength = inputEmail.value.length;
  let senhaLength = inputSenha.value.length;
  emailError.innerHTML = "";
  senhaError.innerHTML = "";

  if (!emailLength) {
    emailError.innerHTML = "<span>Email precisa ser preenchido</span>";
    event.preventDefault();
  }

  if (!senhaLength) {
    senhaError.innerHTML = "<span>Senha precisa ser preenchida</span>";
    event.preventDefault();
  }
});

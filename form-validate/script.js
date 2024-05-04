const elements = {
  inputEmail: document.getElementById("input-email"),
  inputSenha: document.getElementById("input-senha"),
  formLogin: document.getElementById("form-login"),
  emailError: document.getElementById("email-error"),
  senhaError: document.getElementById("senha-error")
};

function showEmailError(msg) {
  elements.emailError.innerHTML = msg;
}

function showSenhaError(msg) {
  elements.senhaError.innerHTML = msg;
}

elements.formLogin.addEventListener("submit", function (event) {
  let emailLength = elements.inputEmail.value.length;
  let senhaLength = elements.inputSenha.value.length;
  showEmailError('');
    // emailError.innerHTML = "";
  showSenhaError('');
  // senhaError.innerHTML = "";

  if (!emailLength) {
    showEmailError("Email precisa ser preenchido")
    // emailError.innerHTML = "<span>Email precisa ser preenchido</span>";
    event.preventDefault();
  }

  if (!senhaLength) {
    showSenhaError("Senha precisa ser preenchida")
    // senhaError.innerHTML = "<span>Senha precisa ser preenchida</span>";
    event.preventDefault();
  }
});

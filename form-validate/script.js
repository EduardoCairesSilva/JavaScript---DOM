const elements = {
  inputEmail: document.getElementById("input-email"),
  inputSenha: document.getElementById("input-senha"),
  formLogin: document.getElementById("form-login"),
  emailError: document.getElementById("email-error"),
  senhaError: document.getElementById("senha-error")
};

const showEmailError = (msg) => {
  elements.emailError.innerHTML = msg;
}

const showSenhaError = (msg) => {
  elements.senhaError.innerHTML = msg;
}

const showError = (msg, elementId) => {
  document.getElementById(elementId).innerHTML = msg;
}

elements.formLogin.addEventListener("submit", (event) => {
  let emailLength = elements.inputEmail.value.length;
  let senhaLength = elements.inputSenha.value.length;
  
  showError('', 'email-error');
  // showEmailError('');
    // emailError.innerHTML = "";
  showError('', 'senha-error');
  // showSenhaError('');
  // senhaError.innerHTML = "";

  if (!emailLength) {
    showError("Email é um campo obrigatório!", "email-error")
    // showEmailError("Email precisa ser preenchido")
    // emailError.innerHTML = "<span>Email precisa ser preenchido</span>";
    event.preventDefault();
    return;
  }

  if(emailLength < 8) {
    showError("Email precisa ter no minimo 8 caracteres!", "email-error")
  }

  if (!senhaLength) {
    showError("Senha é um campo obrigatório!", "senha-error")
    // showSenhaError("Senha precisa ser preenchida")
    // senhaError.innerHTML = "<span>Senha precisa ser preenchida</span>";
    event.preventDefault();
    return;
  }

  if(senhaLength < 8) {
    showError("Senha precisa ter no minímo 8 caracteres!", 'senha-error')
  }
});

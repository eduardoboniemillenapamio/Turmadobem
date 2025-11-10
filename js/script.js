const formContato = document.getElementById("form-contato");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

formContato.addEventListener("submit", (e) => {
  e.preventDefault();

  if (formContato.checkValidity()) {
    formContato.reset();
    mensagemSucesso.classList.add("mostrar");
    setTimeout(() => mensagemSucesso.classList.remove("mostrar"), 4000);
  } else {
    formContato.reportValidity();
  }
});
const form = document.getElementById("form-contato");
const msgSucesso = document.getElementById("mensagem-sucesso");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
    msgSucesso.classList.add("mostrar");

    setTimeout(() => {
      msgSucesso.classList.remove("mostrar");
    }, 4000);
  });
}

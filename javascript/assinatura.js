(function () {
  emailjs.init("N41G3yW2YAvnZy4dw"); 
})(); // inicia o emailJS antes de tudo impedindo problemas

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();// pega as informações do formulario, evia e impede da pagina recaregar após

  emailjs.sendForm('service_2bm08j7', 'template_ucexpwm', this)
    .then(function () {//envia os dados do formulario com EmailJS

      alert("Recomendação enviada com sucesso!");
    }, function (error) {
      alert("Erro ao enviar e-mail: " + error.text);
    });//exibe uma mensagem caso o email seja enviado com sucesso ou se não for
});
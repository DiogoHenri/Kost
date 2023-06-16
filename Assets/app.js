
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.form');
    var nameInput = document.getElementById('name-input').value;
    var emailInput = document.getElementById('email-input').value;
    var passwordInput = document.getElementById('password-input').value;
    var submitButton = document.getElementById('submit-button');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio do formulário
  
      // Obtém os valores dos campos do formulário
      var name = nameInput.value;
      var email = emailInput.value;
      var password = passwordInput.value;
  
      // Verifica se os campos estão preenchidos
      if (name && email && password) {
        // Cria um objeto de usuário
        var user = {
          name: name,
          email: email,
          password: password
        };
  
        // Armazena o usuário no localStorage
        localStorage.setItem('user', JSON.stringify(user));
  
        // Login bem-sucedido, redirecionar ou executar ações desejadas
        alert('Cadastro realizado com sucesso! Faça login para continuar.');
  
        // Limpa os campos do formulário
        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
  
        // Faz login automaticamente
        loginUser(email, password);
        window.location.href = '/MainDash/Dash.html';
      } else {
        // Exibe uma mensagem de erro se algum campo estiver vazio
        alert('Por favor, preencha todos os campos');
      }
    });
  
    function loginUser(email, password) {
      // Obtém os dados do usuário do localStorage
      var storedUser = localStorage.getItem('user');
      
      if (storedUser) {
        // Converte a string JSON em um objeto
        var user = JSON.parse(storedUser);
  
        // Verifica se as informações correspondem aos dados do usuário
        if (email === user.email && password === user.password) {
          // Login bem-sucedido, redirecionar ou executar ações desejadas
          alert('Login bem-sucedido!');
          // Redirecionar para outra página após o login
          window.location.href = '/MainDash/Dash.html';
        } else {
          // Informações de login incorretas
          alert('Email ou senha incorretos!');
        }
      } else {
        // Usuário não existe
        alert('Usuário não encontrado!');
      }
    }
  });


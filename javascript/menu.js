
  const btnMenu = document.getElementById('btn-menu'); //pega o icone exclusivo para aparelhos celulares 
  const menu = document.getElementById('menu'); // pega as informações da barra de navegação

  btnMenu.addEventListener('click', () => { //executa a função de monstrar o menu
    menu.classList.toggle('show');
  });
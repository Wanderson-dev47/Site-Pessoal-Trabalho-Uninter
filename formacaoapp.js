function exibirLista() {
    let exibir = document.querySelector(".display-certificados");
  
    if (exibir.classList.contains('hide')) {
      exibir.classList.remove('hide');
    } else {
      exibir.classList.add('hide');
    }
  }
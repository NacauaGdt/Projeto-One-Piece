/*
   OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto  e mostrar o cartão correspondente ao que foi selecionado na listagem
      
  PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
  PASSO 2 - Identificar o evento de clique no elemento da listagem
  PASSO 3 - remover a classe aberto só do cartão que tá aberto
  PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
    PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
    PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
*/

//PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoOp = document.querySelectorAll(".personagem");

//PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoOp.forEach(personagem => {
  personagem.addEventListener("click", () => {

    //PASSO 3 - remover a classe aberto só do cartão que tá aberto
    const cartaoPersonagemAberto = document.querySelector(".aberto");
    cartaoPersonagemAberto.classList.remove("aberto");

    //PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
    const idPersonagemSelecionado = personagem.attributes.id.value;
    const idDoCartaoPersonagemParaAbrir = "cartao-" + idPersonagemSelecionado;
    const cartaoPersonagemParaAbrir = document.getElementById(idDoCartaoPersonagemParaAbrir);
   cartaoPersonagemParaAbrir.classList.add("aberto");

   //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
   const personagemAtivoNaListagem = document.querySelector(".ativo");
   personagemAtivoNaListagem.classList.remove("ativo");
   
   //PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
   const personagemSelecionadoNaListagem = document.getElementById(idPersonagemSelecionado);
   personagemSelecionadoNaListagem.classList.add("ativo");
  }) 
})


document.addEventListener("DOMContentLoaded", () => {
  console.log("Sobella Cosméticos carregada com sucesso!");

  const botao = document.querySelector(".botao");

  if (botao) {
    botao.addEventListener("click", () => {
      alert("Em breve você poderá finalizar sua compra pelo WhatsApp!");
    });
  }
});

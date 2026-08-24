console.log("Script carregado com sucesso!");

document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector("h1");
  titulo.style.cursor = "pointer";
  titulo.addEventListener("click", () => {
    alert("Você clicou no título!");
  });
});
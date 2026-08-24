// Script responsável pela interatividade da página
console.log("Script carregado com sucesso!");

document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector("h1");
  titulo.style.cursor = "pointer";
  titulo.addEventListener("click", () => {
    alert("Você clicou no título!");
  });
});
const imagens = document.querySelectorAll(".galeria img");
imagens.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.opacity = "0.7";
  });
  img.addEventListener("mouseout", () => {
    img.style.opacity = "1";
  });
});
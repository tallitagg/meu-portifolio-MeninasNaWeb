// OFICINA 4: JavaScript

// 1) Menu para celular: ao clicar no botão, liga e desliga a classe "aberto"
const botao = document.getElementById("menuBotao");
const menu = document.getElementById("menu");

botao.addEventListener("click", function () {
  const aberto = menu.classList.toggle("aberto");
  botao.setAttribute("aria-expanded", aberto);
});

// Fecha o menu depois que a pessoa escolhe uma seção
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto");
    botao.setAttribute("aria-expanded", false);
  });
});

// 2) Ano automático do rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
// 3) Destaque do menu muda conforme a seção que está na tela
const secoes = document.querySelectorAll("main section[id]");
const linksMenu = document.querySelectorAll(".menu a");

function marcar(id) {
  linksMenu.forEach(function (link) {
    link.classList.toggle("ativo", link.getAttribute("href") === id);
  });
}

const observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      marcar("#" + entrada.target.id);
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

secoes.forEach(function (secao) {
  observador.observe(secao);
});

// A seção Contato é curta: quando a página chega ao fim, ela fica marcada
window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    marcar("#contato");
  }
});
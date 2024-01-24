
// Ativar links do menu //
const links = document.querySelectorAll(".header-menu a")

function ativarLink (link){
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add("ativo")
    
    }
}

links.forEach (ativarLink)


// ativar items do orçamento //

const parametro = new URLSearchParams(location.search)

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true;
    }

    console.log(parametro);
}

parametro.forEach(ativarProduto);

// perguntas frequente //

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas //

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens"); // Use querySelector to get a single element

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = window.matchMedia("(min-width: 100px)").matches;
  console.log(media);
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);


// plugins //

if (window.SimpleAnime){
  new SimpleAnime();
}
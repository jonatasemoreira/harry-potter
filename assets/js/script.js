//API do Harry Potter
const url = "https://hp-api.onrender.com/api/characters";

//Caminho onde vou exibir a API
const postsContainer = document.getElementById('movies');
/*
//Botao liga / desliga da música
const botaoLigaDesliga = document.querySelector('.btn-sound');
botaoLigaDesliga.addEventListener('click', toggleAudio);
*/
//Função receber dados e converter .json
async function getPosts() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    renderPosts(data);
  } catch (error) {
    console.log("Erro ao obter posts:", error);
  }
}

//Criando estrutura html para receber dados 
function renderPosts(posts) {
  posts.forEach((post) => {
    const div = document.createElement("div");
    const name = document.createElement("h2");
    const image = document.createElement("img");

    name.textContent = post.name;
    image.src = post.image;

    //div recebendo dois filhos
    div.appendChild(name);
    div.appendChild(image);

    //Enviando a div para o front
    postsContainer.appendChild(div);
  });
}
/*

//Função ligar/desligar musica
function toggleAudio() {
  const audio = document.getElementById("sound-audio");

  //Se tiver pausado, ligar, se nao, ligar.
  if (audio.paused) {
    audio.play();
    //Se tiver Off = On
    botaoLigaDesliga.value = "On";
  } else {
    audio.pause();
    //Se tiver On = Off
    botaoLigaDesliga.value = "Off";
  }
}

*/

//Executando função 
getPosts();
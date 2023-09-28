const url = "https://hp-api.onrender.com/api/characters";

const posts_container = document.getElementById('movies')

async function getPosts() {
    //requisicao a api
    const response = await fetch(url);

    //converte os dados em json
    const data = await response.json();
    
    //manda para o front
    data.map((post) => {
        console.log(post)
        const div = document.createElement("div");
        const name = document.createElement("h2");
        const image = document.createElement("img");

        const link = document.createElement("a");
        /*const species = document.createElement("p");
        const gender = document.createElement("p");
        const patronus = document.createElement("p");
        const ancestry = document.createElement("p");*/

        name.innerText = post.name;
        image.src = post.image;

        /*species.innerText = "Espécie: "+post.species;
        gender.innerText = "Gênero: "+post.gender;
        patronus.innerText = "Patronus: "+post.patronus;
        ancestry.innerText = "Ascendência: "+post.ancestry;*/

        div.appendChild(name);
        div.appendChild(image);
        /*div.appendChild(gender);
        div.appendChild(species);
        div.appendChild(patronus);
        div.appendChild(ancestry);*/

        posts_container.appendChild(div);
        
    });
}

getPosts();

const botaoLigaDesliga = document.querySelector('.btn-sound');

botaoLigaDesliga.addEventListener('click', toggleAudio);

function toggleAudio() {
    const audio = document.getElementById("sound-audio");

    if (audio.paused) {
        audio.play();
        botaoLigaDesliga.value = "On";
    } else {
        audio.pause();
        botaoLigaDesliga.value = "Off";
    }
}
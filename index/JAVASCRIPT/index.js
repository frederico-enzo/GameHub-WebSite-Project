let generos = document.getElementsByClassName("filtro");
let plataforma = document.getElementsByClassName("plataforma");

generos[0].addEventListener('click', () => filtroGenero(generos[0].id));
generos[1].addEventListener('click', () => filtroGenero(generos[1].id));
generos[2].addEventListener('click', () => filtroGenero(generos[2].id));
generos[3].addEventListener('click', () => filtroGenero(generos[3].id));
generos[4].addEventListener('click', () => filtroGenero(generos[4].id));
generos[5].addEventListener('click', () => filtroGenero(generos[5].id));
generos[6].addEventListener('click', () => filtroGenero(generos[6].id));
generos[7].addEventListener('click', () => filtroGenero(generos[7].id));
plataforma[0].addEventListener('click', () => filtroPlataforma(plataforma[0].id));
plataforma[1].addEventListener('click', () => filtroPlataforma(plataforma[1].id));
plataforma[2].addEventListener('click', () => filtroPlataforma(plataforma[2].id));


let generi = "";
let platifo = "all";

const filtroGenero = (gen) => {
    if (quantJogos > 10) {
        quantJogos = 10;
    }

    if (gen == "home") {
        generi = "";
    }
    else {
        generi = gen;
    }

    verJogos(generi, platifo);
}
const filtroPlataforma = (plat) => {
    if (quantJogos > 10) {
        quantJogos = 10;
    }
    platifo = plat;
    verJogos(generi, platifo);
}

var quantJogos = 10;

let btn = document.getElementById("btn");
btn.addEventListener('click', maisJogos);

function maisJogos() {
    quantJogos += 9;
    verJogos(generi, platifo);
}

function joguinhos(database) {
    document.getElementById("conteiner_banner").innerHTML = `<a  target = _blank; href="${database[0].freetogame_profile_url}" id="freetogame_profile_url">
	<img src="${database[0].thumbnail}" id="thumbnail" class="banner" alt=""></a>`


    document.getElementById("line_one").innerHTML = '';

    for (var i = 1; i < quantJogos; i++) {
        document.getElementById("line_one").innerHTML += `
        <a class="ar2" id="freetogame_profile_url" target = _blank; href="${database[i].freetogame_profile_url}">
        <div class="conteiner_jogo ">
            <img class="thanbinel" id="thumbnail" src="${database[i].thumbnail}" alt="">
            <div class="conteiner_botton" >
                <article>
                    <h1 class="title">${database[i].title}</h1>
                    <article class="ar">
                        <p class="genro"> ${database[i].genre}</p>
                        <p class="platform">${database[i].platform}</p>
                    </article>
                </article>  
                <img class="star" src="../IMG/Star 1.png" alt="">
            </div>
        </div>
    </a>`;
    }
}

const verJogos = (category, plataform) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0c67e168ddmshf8b4ef8bed5ff13p141ca2jsn943ceb9c73c3',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    var categoria;

    if (category == "") {
        categoria = ``;
    }
    else {
        categoria = `&category=${category}`;
    }

    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${plataform}${categoria}&sort-by=popularity`, options)
        .then(response => response.json())
        .then(response => {
            joguinhos(response);
        })
        .catch(err => console.error(err));
}

verJogos(generi, platifo);



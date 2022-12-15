/* function home() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5a723a7b10msh3af1b083f31063ap11700ejsn2a03fb694814',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };



    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity', options)
        .then(response => response.json())
        .then(data => {
            data.length = 9;
            data.map((item) => {
                

                const btn = document.getElementById('btn');
                const a = document.createElement('a');
                a.setAttribute('href', item.freetogame_profile_url);
                a.className = 'ar2';
                a.target = '_blank';
                a.href = item.freetogame_profile_url
                const img = document.createElement('h1');
                img.setAttribute('id', item.id);
                img.innerHTML = item.title
                let body = document.getElementById('line_one');
                let div_one = document.createElement('div');
                div_one.className = 'conteiner_jogo';
                let img_one = document.createElement('img');
                img_one.setAttribute('src', item.thumbnail);
                img_one.src = item.thumbnail
                img_one.className = 'thanbinel';
                let div_two = document.createElement('div');
                div_two.className = 'conteiner_botton';
                let article = document.createElement('article');
                let article2 = document.createElement('article');
                article2.className = 'ar';
                let h1 = document.createElement('h1');
                h1.setAttribute('value', item.title)
                h1.innerHTML = item.title;
                h1.className = 'title';
                let p = document.createElement('p');
                p.setAttribute('value', item.genre);
                p.innerHTML = item.genre;
                p.className = 'genro';
                let p2 = document.createElement('p');
                p2.setAttribute('value', item.platform);
                p2.innerHTML = item.platform;
                p2.className = 'platform'
                let img_two = document.createElement('img');
                img_two.className = 'star';
                img_two.src = '../IMG/Star 1.png'
                
                body.appendChild(a);
                a.appendChild(div_one);
                div_one.appendChild(img_one);
                div_one.appendChild(div_two);
                div_two.appendChild(article);
                article.appendChild(h1);
                article.appendChild(article2);
                article2.appendChild(p);
                article2.appendChild(p2);
                div_two.appendChild(img_two);}
            )
        })
}
//platform


function banner() {
    const option = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5a723a7b10msh3af1b083f31063ap11700ejsn2a03fb694814',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity', option)
        .then(response => response.json())
        .then(data => {
            data.length = 1;
            data.map((item) => {

                const conteiner_banner = document.getElementById('conteiner_banner');
                let banner = document.createElement('img');
                banner.setAttribute('src', item.thumbnail);
                banner.src = item.thumbnail;
                banner.className = 'banner';
                conteiner_banner.appendChild(banner);
                console.log(data)
            })
        })


}

banner()
home() */

let generos = document.getElementsByClassName("filtro");
let plataforma = document.getElementsByClassName("plataforma");
var quantJogos = 10;
let generi = "";
let platifo = "all";
const selecao_genero = (gen) => {
	if(quantJogos>10){
		quantJogos = 10;
	}

	if(gen == "home")
	{
		generi = "";
	}
	else
	{
		generi = gen;
	}

	verJogos(generi, platifo);
}
const selecao_plataforma = (plat) => {
	if(quantJogos>10){
		quantJogos = 10;
	}
	platifo = plat;
	verJogos(generi, platifo);
}

function somarJogos() {
	quantJogos += 9;
	verJogos(generi, platifo);
}
let buttonMostrarMais = document.getElementById("btn");
	buttonMostrarMais.addEventListener('click', somarJogos);

function Mostjogos(jogos) {
    document.getElementById("conteiner_banner").innerHTML = `<a href="${jogos[0].freetogame_profile_url}" id="freetogame_profile_url">

	<div id="img_banner"><img src="${jogos[0].thumbnail}" id="thumbnail" class="banner" alt=""></div>`


	document.getElementById("line_one").innerHTML = '';
	
	for (var i = 1; i < quantJogos; i++) {
		document.getElementById("line_one").innerHTML += `
        <a class="ar2" id="freetogame_profile_url" target = _blank; href="${jogos[i].freetogame_profile_url}">
        <div class="conteiner_jogo ">
            <img class="thanbinel" id="thumbnail" src="${jogos[i].thumbnail}" alt="">
            <div class="conteiner_botton" >
                <article>
                    <h1 class="title">${jogos[i].title}</h1>
                    <article class="ar">
                        <p class="genro"> ${jogos[i].genre}</p>
                        <p class="platform">${jogos[i].platform}</p>
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
	
	if(category == "")
	{
		categoria = ``;
	}
	else
	{
		categoria = `&category=${category}`;
	}
	
	fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${plataform}${categoria}&sort-by=popularity`, options)
		.then(response => response.json())
		.then(response => {
			Mostjogos(response);
		})
		.catch(err => console.error(err));
}

verJogos(generi, platifo);

generos[0].addEventListener('click',() => selecao_genero(generos[0].id));
generos[1].addEventListener('click',() => selecao_genero(generos[1].id));
generos[2].addEventListener('click',() => selecao_genero(generos[2].id));
generos[3].addEventListener('click',() => selecao_genero(generos[3].id));
generos[4].addEventListener('click',() => selecao_genero(generos[4].id));
generos[5].addEventListener('click',() => selecao_genero(generos[5].id));
generos[6].addEventListener('click',() => selecao_genero(generos[6].id));
generos[7].addEventListener('click',() => selecao_genero(generos[7].id));


plataforma[0].addEventListener('click',() => selecao_plataforma(plataforma[0].id));
plataforma[1].addEventListener('click',() => selecao_plataforma(plataforma[1].id));
plataforma[2].addEventListener('click',() => selecao_plataforma(plataforma[2].id));

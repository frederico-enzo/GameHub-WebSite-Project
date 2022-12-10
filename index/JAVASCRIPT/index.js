
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
                let h1 = document.createElement('h1');
                h1.setAttribute('value', item.title)
                h1.innerHTML = item.title;
                h1.className = 'title';
                let p = document.createElement('p');
                p.setAttribute('value', item.genre);
                p.innerHTML = item.genre;
                p.className = 'genro';
                let img_two = document.createElement('img');
                img_two.className = 'star';
                img_two.src = '../IMG/Star 1.png'
                body.appendChild(div_one);
                div_one.appendChild(img_one);
                div_one.appendChild(div_two);
                div_two.appendChild(article);
                article.appendChild(h1);
                article.appendChild(p);
                div_two.appendChild(img_two);
            })
        })



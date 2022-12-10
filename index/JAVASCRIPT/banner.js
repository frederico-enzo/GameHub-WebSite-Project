
    const option = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5a723a7b10msh3af1b083f31063ap11700ejsn2a03fb694814',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };



    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=mmo', option)
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



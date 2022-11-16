const netflix = async() => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b6e5c43dcamsh0acfaea2676ac9fp11af8djsn7de1bffb9d03',
			'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
		}
	};
	
	var response = ''
    var filmCount = 0
	response = await fetch('https://unogs-unogs-v1.p.rapidapi.com/search/titles?order_by=date&type=movie', options)

	data = await response.json()

	console.log(data);

	film = data.results
	film.forEach(element => {
		console.log(element);

		MovieDiv = document.createElement("div")
		MovieDiv.className = "MoviePlaceHolder"

		var titleH1 = MovieDiv.className
		var imgLink = element.img

		h1 = document.createElement('h1')
		h1.className = "title"
		h1.innerHTML = element.title

		img = document.createElement('img')
		img.className = "img"
		img.src = imgLink

		LikeButton = document.createElement('img')
		LikeButton.className = "likeButton"
		LikeButton.src = "./Assets/Img/unFavorite Icon.png"

		MovieDiv.appendChild(img)
		MovieDiv.appendChild(h1)
		MovieDiv.appendChild(LikeButton)

		if(filmCount >= 0 & filmCount < 10){
			document.getElementById('row-poster1').appendChild(MovieDiv)
       	    filmCount ++
            console.log(filmCount)
		} else if(filmCount >= 10 & filmCount < 20){
			document.getElementById('row-poster2').appendChild(MovieDiv)
       	    filmCount ++
            console.log(filmCount)
		} else if(filmCount >= 20 & filmCount < 30){
			document.getElementById('row-poster3').appendChild(MovieDiv)
       	    filmCount ++
            console.log(filmCount)
		}
	});

}
netflix();
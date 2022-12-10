// var KeyCount = 0

// for (let [key, value] of Object.entries(localStorage)) {
// 	if (value == "Liked") {
// 		//console.log(`${key}: ${value}`);

// 		//document.getElementById(String(key) + "LB").src = "./Assets/Img/Favorite Icon.png";
// 		console.log( String(key) + "LB" )
// 		KeyCount++
// 	}
//   }
//   console.log(KeyCount)

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
		//console.log(element);

		

///////////////////////////////////////////////////////////////////////////////////

		MovieDiv = document.createElement("div")
		MovieDiv.className = "MoviePlaceHolder"
		MovieDiv.Id = element.title

		var titleH1 = MovieDiv.className
		var imgLink = element.img

		h1 = document.createElement('h1')
		h1.className = "title"
		h1.id = JSON.stringify(element.title) 
		h1.innerHTML = element.title

		img = document.createElement('img')
		img.className = "img"
		img.src = imgLink

		LikeButton = document.createElement('img')
		LikeButton.id = element.title + "LB"
		LikeButton.className = "likeButton"
		LikeButton.src = "./Assets/Img/unFavorite Icon.png"

		//console.log(LikeButton)

		MovieDiv.appendChild(img)
		MovieDiv.appendChild(h1)
		MovieDiv.appendChild(LikeButton)

		for (let [key, value] of Object.entries(localStorage)) {
			if (value == "Liked") {
				//console.log(`${key}: ${value}`);
				MovieIden2 = String(key) + "LB"
				if (document.getElementById(MovieIden2)) {
					document.getElementById(MovieIden2).src = "./Assets/Img/Favorite Icon.png";

					LikedMovieDiv = document.createElement("div")

						LikedMovieDiv.className = "MoviePlaceHolder"
						LikedMovieDiv.Id = String(key)

						var LikedtitleH1 = LikedMovieDiv.className
						var LikedimgLink = String(key)

						Likedh1 = document.createElement('h1')
						Likedh1.className = "title"
						Likedh1.id = JSON.stringify(key) 
						Likedh1.innerHTML = String(key)

						Likedimg = document.createElement('img')
						Likedimg.className = "img"
						Likedimg.src = 

						LikedLikeButton = document.createElement('img')
						LikedLikeButton.id = String(key) + "LB"
						LikedLikeButton.className = "likeButton"
						LikedLikeButton.src = "./Assets/Img/unFavorite Icon.png"

						//console.log(LikeButton)

						LikedMovieDiv.appendChild(Likedimg)
						LikedMovieDiv.appendChild(Likedh1)
						LikedMovieDiv.appendChild(LikedLikeButton)

						document.getElementById('row-poster0').appendChild(LikedMovieDiv)
				}
			}
		  }
		  //console.log(KeyCount)

		LikeButton.addEventListener('click', function handleClick(event) {
			MovieIden = String(element.title) + "LB"
			//console.log(String(element.title))
			//console.log(element.title)

			if (localStorage.getItem(element.title)) {
				localStorage.removeItem(element.title)
				document.getElementById(MovieIden).src = "./Assets/Img/unFavorite Icon.png";
			} else {
				localStorage.setItem(element.title,"Liked")
				document.getElementById(MovieIden).src = "./Assets/Img/Favorite Icon.png";
			}

			console.log(MovieIden)
			
		});

		if(filmCount >= 0 & filmCount < 10){
			document.getElementById('row-poster1').appendChild(MovieDiv)
       	    filmCount ++
		} else if(filmCount >= 10 & filmCount < 20){
			document.getElementById('row-poster2').appendChild(MovieDiv)
       	    filmCount ++
		} else if(filmCount >= 20 & filmCount < 30){
			document.getElementById('row-poster3').appendChild(MovieDiv)
       	    filmCount ++
		}
	});

}
netflix();
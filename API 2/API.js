const EminemIsAfraid = async ()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a2abc5c0a3mshd5146dd6de79fdap12eb6cjsn5304cb00792d',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
    };

    var response = ""

    fetch('https://youtube-music1.p.rapidapi.com/v2/search?query=eminem', options)

    data = await response.json()

    console.log(data);

    sessionStorage.array.forEach(element => {
        
    });
}
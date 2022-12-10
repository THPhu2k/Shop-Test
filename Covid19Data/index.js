const Covid19Data = async ()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a2abc5c0a3mshd5146dd6de79fdap12eb6cjsn5304cb00792d',
            'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
        }
    };

    var response = ""

    response = await fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada', options)

    data = await response.json()

    console.log(data);
}

Covid19Data()
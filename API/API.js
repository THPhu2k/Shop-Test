// const FetchAPI = async ()=>{
//     var response = "no messages found"

//     response = await fetch('https://retoolapi.dev/U9Z01Z/userdata')
//     // in basic terms, script will wait until it got the data
//     // pro? avoid slow internet issues
//     // con? idk? not yet.
//     data = await response.json()
//     // translate da data
//     console.log(data);
//     // print da translated data
// }

// FetchAPI()

async function loadJson(url) {
    let response = await fetch(url);
  
    if (response.status == 200) {
      let json = await response.json();
      return json;
    }
  
    throw new Error(response.status);
  }
  
  loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404 (4)

// let Order = "None"

// async function bsOrder() {
//     let myPromise = new Promise(function(Order) {
//       setTimeout(function() {Order("2 number 9s a number 9 large");}, 3000);
//       // script will wait until Massive Cloud's responded with his order then it will log "2 number 9s a number 9 large" in return
//     });
//     Order = await myPromise;
//     console.log(Order)
//   }
  
// bsOrder();
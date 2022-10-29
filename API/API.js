const FetchAPI = async ()=>{
    var response = "no messages found"

    response = await fetch('https://retoolapi.dev/U9Z01Z/userdata')
    // in basic terms, script will wait until it got the data
    // pro? avoid slow internet issues
    // con? idk? not yet.
    data = await response.json()
    // translate da data
    console.log(data);
    // print da translated data
}

FetchAPI()

// ------ //
// CODE 1 //
// ------ //

// async function loadJson(url) {
//     let response = await fetch(url);
  
//     if (response.status == 200) {
//       let json = await response.json();
//       return json;
//     }
  
//     throw new Error(response.status);
//   }
  
  // loadJson('https://javascript.info/no-such-user.json')
  //   .catch(alert); // Error: 404 (4)

// ------ //
// CODE 2 //
// ------ //

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url)

  if (response.status == 200) {
    let json = await response.json();
    return json;
  } else {
    throw new HttpError(response);
  }
}

// Ask for a user name until github returns a valid user
function demoGitHubUser() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
  .then(user => {
    alert(`Full name: ${user.name}.`);
    return user;
  })
  .catch(err =>{
    if(err instanceof HttpError && err.response.status == 404) {
      alert("No such user, please reenter.");
      return demoGitHubUser();
    } else {
      throw err;
    }
  });
}

demoGitHubUser();

// ---- //
// TEST //
// ---- //

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


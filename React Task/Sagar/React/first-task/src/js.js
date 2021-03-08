class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  } else {
    throw new HttpError(response);
  }
}


async function demoGithubUser(){
    
    while(true){
        let name = '';

        try {
            let user = await loadJson('')
            break;
        } catch(err){

        }

    }
}


async function done(){
    await new Promise(resolve => setTimeout(resolve,1000));

    return 10;

    function f(){
        done().then(result => alert(result))
    }
}

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  
  //NASA api_key
  const url = `https://api.nasa.gov/planetary/apod?api_key=2bazCt5nywonJnp8qokrWtL47eRY4rMgHiTlJWIG&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation 
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


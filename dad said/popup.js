fetch('https://icanhazdadjoke.com/', {
  headers: {
    'Accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    const jokeElement = document.getElementById('joke');
    if (jokeElement) {
      jokeElement.innerHTML = data.joke; // Update the innerHTML of the 'joke' element with the fetched joke
    }
  })
  .catch(err => console.log(err));

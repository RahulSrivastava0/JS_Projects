const button = document.querySelector('.button')
const Title = document.querySelector('.title')
const Author = document.querySelector('.author')
const Image = document.querySelector('.image')

function loadMeme()
{
    fetch("https://meme-api.com/gimme/2")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meme = data.memes[0];
        Title.innerText = meme.title;
        Image.src = meme.url;
        Author.innerText = meme.author;
      })
      .catch((error) => {
        return console.log("Error! Does not fetch Details");
      });
}

// loadMeme()
window.addEventListener('DOMContentLoaded',loadMeme)

button.addEventListener('click',(e)=>{
    e.preventDefault()
    loadMeme()
})
const btn = document.getElementById('btn');
const name = document.getElementById('name');

// Show 'Suits' as default movie on page load
window.addEventListener('DOMContentLoaded', async () => {
    name.value = 'Suits';
    await callMovie();
});
const img = document.getElementById('img');
const  title = document.getElementById('title');
const year= document.getElementById('year');
const released = document.getElementById('released');
const actors = document.getElementById('actors');
const language = document.getElementById('language');
const rating = document.getElementById('rating');
const director = document.getElementById('director');
const plot = document.getElementById('plot');
const url = 'http://www.omdbapi.com/?t=';
const api = '&apikey=ef83680f';

btn.addEventListener('click', async() => {
     await callMovie();
});
name.addEventListener('keydown', async (e)=> {
    if(e.key === 'Enter'){
        await callMovie();
    }
});

async function callMovie() {
    const movie = name.value;
   
    try{
        const data = await axios.get(`${url + movie + api}`);
       
        if(data){
           title.innerText = data.data.Title;
           director.innerText = data.data.Director;
           year.innerText= data.data.Year;
           released.innerText = data.data.Released;
           actors.innerText = data.data.Actors;
           language.innerText = data.data.Language;
           rating.innerText = data.data.imdbRating;
           plot.innerText = data.data.Plot;
           img.src= data.data.Poster;
    }
    } catch(e){
        console.log("Error", e);
    }
}

name.value = "Suits";
callMovie();
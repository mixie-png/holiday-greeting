// Changes the amount of snow
var snowAmount = document.querySelector('.snow-container');
var sortSnow = document.querySelector('#snowing');

function changeSnow() {
    if (sortSnow.value == 'no-snow') {
        snowAmount.innerHTML = ''
    } else if (sortSnow.value == 'snow') {
        snowAmount.innerHTML = '<div class="snow snow1"></div>'
    } else if (sortSnow.value == 'more-snow') {
        snowAmount.innerHTML = '<div class="snow snow1"></div> <div class="snow snow2"></div>'
    } else if (sortSnow.value == 'even-more-snow') {
        snowAmount.innerHTML = '<div class="snow snow1"></div> <div class="snow snow2"></div> <div class="snow snow3"></div>'
    }
}

// Changes the lights
var bulbs = document.getElementsByClassName('bulb');
console.log(bulbs);
var sortLights = document.querySelector('#lights');

function changeLights() {
    for (let bulb of bulbs) {
        console.log(bulb);
        if (sortLights.value == 'wave-lights') {
            bulb.classList.add("wave-bulb");
            bulb.classList.remove("flash-bulb");
        } else if (sortLights.value == 'flash-lights') {
            bulb.classList.add("flash-bulb");
            bulb.classList.remove("wave-bulb");
        } else if (sortLights.value == 'off-lights') {
            bulb.classList.remove("flash-bulb");
            bulb.classList.remove("wave-bulb");
        }
    }
}

// Random Joke Generator
// Joke API source = https://github.com/marcyvillegas/random-joke-generator?tab=readme-ov-file
const jokeURL = "https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
const result = document.querySelector("#result")

async function getJoke(event) {
    event.preventDefault();
    result.innerHTML = "<h3 id='loader'>Searching for a corny joke...</h3>";
    console.log("Function ran!");

    let response = await fetch(jokeURL);
    let data = await response.json();
    console.log(data);

    result.innerHTML = `
    <p id="joke-setup">${data.setup}</p>
    <p id="joke-answer">${data.delivery}</p>
    `;
}
// "connection" avec fichier JSON 
const reponse = await fetch('config.json');
const liste = await reponse.json();

// Création des balises 
const ville = liste[6];
const nomElement = document.createElement("h2");
nomElement.innerText = ville.nom;

//Rattachement des balises au DOM
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(nomElement);

// Requête à l'API OpenWeatherMap
const apiKey = '094fc5ccae0538707f9f9f782690d695';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q= ${ville.nom} &lang=fr&appid=${apiKey}&units=metric`;

fetch(apiUrl).then((response) => 
response.json().then(data => {
console.log(data);

// Données météo
document.querySelector('#weather').innerHTML = data.weather[0].description;// Description du temps
document.querySelector('#temps').innerHTML = data.main.temp + '°C';// Température
document.querySelector('#humidity').innerHTML = data.main.humidity + "%";// Humidité
document.querySelector('#wind').innerHTML = data.wind.speed + 'km/h';// Vitesse du vent
document.querySelector('#ressenti').innerHTML = data.main.feels_like  + '°C ressentis';// Temperature ressentie
  
// Obtention de l'icone decrivant le temps en fonction de la description du temps
let icon = data.weather[0].icon
const img = document.querySelector('#weatherIcon');
img.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)

  })
);

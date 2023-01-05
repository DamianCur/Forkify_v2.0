'use strict';

import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid';

// prettier-ignore
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

const geolocationSuccess = position => {
  const { latitude } = position.coords;
  const { longitude } = position.coords;
  
  const coords = [latitude,longitude]

  const map = L.map('map').setView(coords, 13);


  L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }).addTo(map);

  

    map.on('click', (mapEvent) => {






      
      console.log(mapEvent);
      const {lat, lng} = mapEvent.latlng

      L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
          L.popup({
            maxwidth: 250,
            minwidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
          })
        )
        .setPopupContent('Workout')
        .openPopup();
    })
};

const geolocationFailure = () => {
  alert('Could not get your position! 🤯 App will not work propelly. 😨');
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    geolocationSuccess,
    geolocationFailure
  );
}

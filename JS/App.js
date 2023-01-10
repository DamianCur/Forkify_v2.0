const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const formButton = document.querySelector('.form__btn');
const containerInstruction = document.querySelector('.container__instruction');

class App {
  #map;
  #mapEvent;

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toogleElevationField)
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => {
        alert('Could not get your position! 🤯 App will not work propelly. 😨');
      });
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];
    console.log(this);
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      }
    ).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this)) 
      
    
  }

  _showForm(mapE) {

    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    containerInstruction.classList.add('hidden');
    inputDistance.focus();
  }

  _toogleElevationField() {

      inputElevation
        .closest('.form__row')
        .classList.toggle('form__row--hidden');
      inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    
  }

  _newWorkout(e) {
    
    
    
    e.preventDefault();
    
    const { lat, lng } = this.#mapEvent.latlng;
    L.marker([lat, lng])
    .addTo(this.#map)
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
      
      
      // prettier-ignore
      const inputArray = [inputCadence, inputDistance, inputDuration, inputElevation];

      inputArray.forEach(el => {
        el.value = '';
      });
  }


}

const app = new App();

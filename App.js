class App {
  constructor() {}

  _getPosition() {
    

    const geolocationFailure = () => {
      alert('Could not get your position! 🤯 App will not work propelly. 😨');
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap,
        geolocationFailure
      );
    }
  }

  _loadMap(position) {


      const { latitude } = position.coords;
      const { longitude } = position.coords;

      const coords = [latitude, longitude];

      map = L.map('map').setView(coords, 13);

      L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        }
      ).addTo(map);

      map.on('click', mapE => {
        mapEvent = mapE;
        form.classList.remove('hidden');
        containerInstruction.classList.add('hidden');
        inputDistance.focus();

        // console.log(mapEvent);
        // const {lat, lng} = mapEvent.latlng

        // L.marker([lat, lng])
        //   .addTo(map)
        //   .bindPopup(
        //     L.popup({
        //       maxwidth: 250,
        //       minwidth: 100,
        //       autoClose: false,
        //       closeOnClick: false,
        //       className: 'running-popup',
        //     })
        //   )
        //   .setPopupContent('Workout')
        //   .openPopup();
      });
    
  }

  _showForm() {}

  _toogleElevationField() {}

  _newWorkout() {}
}

class Workout {
  date = new Date();
  id = crypto.randomUUID();

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}





class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace()
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace
  }
}





class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed()
  }

  calcSpeed() {
    this.speed = this.distance/(this.duration / 60)
    return this.speed
  }
}

export {Workout, Running, Cycling}
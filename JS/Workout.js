class Workout {
  date = new Date();
  id = crypto.randomUUID();

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}

export { Workout };

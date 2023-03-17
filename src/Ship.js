export class Ship {
  constructor(length, locations) {
    this.length = length;
    this.locations = locations;
  }
  // pass in an array of hits, if we find a match for each of our
  // location elements we are sunk
  isSunk(hits) {
    let result = false;
    this.locations.forEach((e) => {
      result = hits.includes(e);
    });
    return result;
  }
}

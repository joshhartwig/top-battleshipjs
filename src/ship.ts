export class ship {
  length: number = 0;
  locations: number[] = [];
  constructor(length: number, locations: number[]) {
    this.length = length;
    this.locations = locations;
  }

  isSunk(hits: number[]) {
    let result = false;
    this.locations.forEach((e) => (result = hits.includes(e)));
    return result;
  }
}

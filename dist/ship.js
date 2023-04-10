"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ship = void 0;
class ship {
    constructor(length, locations) {
        this.length = 0;
        this.locations = [];
        this.length = length;
        this.locations = locations;
    }
    isSunk(hits) {
        let result = false;
        this.locations.forEach((e) => (result = hits.includes(e)));
        return result;
    }
}
exports.ship = ship;

const MapTwoDimArray = (arr, func) => {
  for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < arr[a].length; b++) {
      func(arr[a][b], a, b);
    }
  }
};

const ModifyArray = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ModifyArray(arr[i], func);
    } else {
      arr[i] = func(arr[i]);
    }
  }
};

// generate a random number between x and y
const GetRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// converts an x, y coordinate into a cell
const ConvertCoords = (x, y) => {
  let r = x * 10 + y;
  return r;
};

export default {
  MapTwoDimArray,
  ModifyArray,
  GetRandomNumber,
  ConvertCoords,
};

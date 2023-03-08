const MapTwoDimArray = (arr, func) => {
  for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < arr[a].length; b++) {
      func(arr[a][b]);
    }
  }
};

export default {
  MapTwoDimArray,
};

const ship = (length, orientation, coords = {r:0,c:0}) => {
  this.location = [];
  this.length = length;
  let hits = 0;
  
  const hit = () => hit++;
  const print = () => this.length;
  const isSunk = () => {
    if(hits >= length) return true;
    return false;
  };
  
  const create = () => {
    let r = coords.r;
    let c = coords.c;
    if(orientation === 0) {
      for(let i = 0; i < length; i++){
        console.log(`r${r} c${c++}`);
      }
    } else if(orientation === 1) {
      for(let i = 0; i < length; i++){
        console.log(`r${r--} c${c}`);
      }
    }
  }
  return { isSunk, create, print, hit }
}
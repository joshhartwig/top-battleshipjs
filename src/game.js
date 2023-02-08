/*
game flow...
1. game starts with board empty, this round allows player to place his ships
2. after player places ships, computer places ships
3. once computer has placed ships go into follow
4. player picks location on board to fire... it shows miss or hit
5. computer fire shot its miss or hit
6. continue on until one sides ships are destroyed
7. add to score and reset
*/

// controls the entire game flow has control of board and ships
import { board } from "./board";

export class game {
  ai_score = 0;
  player_score = 0;

  constructor(){
    
  }
}
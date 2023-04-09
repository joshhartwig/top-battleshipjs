# Battleship Project for TOP
<https://www.theodinproject.com/lessons/foundations-etch-a-sketch>

## About

This project is a ground up build of the Battleship game from scratch using vanilla js.

Todo:
- Add 'Ship Control': Currently ships are placed by called the placeship function on a specific div, the div correlates to a row and column. This works but it is fairly static in that we cannot control the size of ours ships or the orientation.
We want a module that displays the current ship up for placement in the form of divs related to its size. The first ship starts at length 5, then 4, then 3, then 2, then 1, once the ship queue is empty, the game starts as all the ships have been placed. The Ship divs should be draggable and right clicking flips the orientation. Note this will likely be a variable in top level game state.
- Add a button for dev mode
- Fix the logo
- Make the AI smarter, its random, make it know what is hit and pick around that. The risk is that it keeps picking adjacent numbers.
- Make it prettier
- Dark Mode and Light mode
- Make sure ships cannot intersect 

## Live View
<https://joshhartwig.github.io/...>

## Usage

The page will load with a default grid 8x8. You can adjust grid size to a maximum of 64 cells. By default the pen is black, you can randomize pen color with random color button.

## Contributing

NA

## License

[MIT](https://choosealicense.com/licenses/mit/)
# HOUSEPARTY ESCAPE!

## User Stories: 

1. *Minimum Viable Product*: User should be able to type responses to questions into an input bar, and move through the game’s maze based on the responses. 

2. *Minimum Viable Product*: User should be racing against a countdown which, if it hits zero, displays a ‘game over’ message.

3. User should be able to visually track her/his progress through the maze. 

4. User should receive a message when her/his answer is incorrect giving her/him a clue to solve the question. 


## Approach Taken: 

Broke project down into 2 x core components: text capturing mechanics, and visual representation mechanics. 

Text capturing /evaluation : 
-needed method to capture user responses to question prompts, so I made heavy use of the input html element, and jQuery selectors to grab this text from the input bar, split the string into individual words, save them in a new array, and use an if/else statement evaluate if one of the strings in the array matches the solution listed in the array. 

Visual representation: 
-Used HTML to create the game board out of divs, then used CSS to style the board & create background images for each ‘room’ tile.
-made heavy use of jQuery and CSS via the .css() tool to manipulate the ‘top’ and ‘left’ properties of a div that represents the player based on successful responses. 

A global variable (roomCounter) goes up when the player successfully answers a question, and is the backbone of the game’s mechanics. 

## Technologies Used
- HTML, CSS, jQuery 
- Nested arrays
- .css() method to update position of user avatar
- .html() to update the text prompts & timer
- setInterval to build the timer 
- .on(‘keypress’) to capture user input string & evaluate

## Unsolved Problems
- some text prompts display for irregular amounts of time. I believe this is perhaps due to the setInterval in the timer’s function overwriting the text-prompt, but wasn’t able to satisfactorily resolve the error. 
- was not able to get an interstitial screen to properly display when transition between rooms. 
- the <li> containing the timer shifts positions at the end - was not able to keep its location fixed 100%. 
- the .css() top + left transitions don’t animate smoothly consistently - again, I feel like this has something to do with the setIntervals.
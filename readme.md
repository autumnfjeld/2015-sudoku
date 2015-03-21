# Sudoku Bubbles

Something fun to demonstrate an ability to architect modular, performant Javascript code with well-structured, flexible CSS.

## See it in action
  [http://sudoku.nmutua.com/](http://sudoku.nmutua.com/)

## Installation
  * Download or fork this git repo
  * Get project dependencies: from root directory execute command
      * npm install
  * Build project. This will compile sass (w/autoprefixer), jade, and browserify modules to public/
      * npm run build
  * Start local server at http://localhost:8088/ Port can be changed in package.json script.
      * npm run start
  * Play Game
  * Broadcast local server (ex: for during dev on mobile)
      * npm run grok
  * Change npm deploy script if suitable for your workflow

##ToDo
  * Board generator (scrap checking that was started)
  * Wire up reset
  * Fun user feedback on failure/succcess
  * Write tests (check out jasmine-jquery )
  * Polish styling, responsive behavior of all elements
  * Make more bubbly
  
## Notes
  * Using npm as build tool
  * Using browserify to modularize javascript into three components: View, Boardmodel, and an Event controller
  * Wanted to see how sophisticated a build / watch system could be done via npm scripts.  Think more could be done.  Wish list on this topic (i.e. need to research to determine feasibility):
      * automated watching for scss, jade and js in one command
  * Next time: spend more time planning architecture on paper before coding
  * Misguided logic led me to start writing board checking functions, when instead I should have gone straigt to creating a board generator that would create both the solution and the starting board.   



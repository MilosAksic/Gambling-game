# Gambling game

## Gambling game using ticket system 

To do list: 

* In HTML :
    * Create 4 sections
        * Section 1 for choosing numbers
        * Section 1 will contain from 30 divs that each represents one number from 1-30
        * There will be 6 x 5 grid
        * Section 2 will be for button "DODAJ TIKET" (add ticket) that will add desirable numbers into section 4 (ticket list)
        * And also there will be button to play game
        * Section 3 will be for displaying drawn numbers, 12 numbers are drawn
        * There will be 6 x 2 grid
        * Section 4 will be for displaying tickets that were choosen and when game is finished it will display if it was winning ticket or not
        * 5 divs on top of others
    * Button for reseting game
    * Add abillity to bet
* In JS:
    * Functions: 
        * For 12 random numbers that doesn't repeat
        * Displaying numbers one by one, 2 seconds each
        * Comparing functions
    * Make sure that u can click Add Ticket only when u choose at least one number
    * Make sure that u cant choose more then 5 numbers
    * Choosen numbers needs to be green once they are selected and go to original number once they are not selected (using classes)
    * Drawn numbers need to appear periodically , each after 2s (setInterval)
    * Save ticket numbers into arrays (ticket1, tickets2, etc.)
    * Compare those tickets to winning combination, if it contains all numbers it is considired winning ticket
    * Change colour of div to green and add text that it is winning ticket 
    * Red if it's losing ticket
    * Add starting money (variable name StartingMoney)
    * Betting ammount
    * Display alerts/msg if user tries to add ticket if <1 or >5 of numbers are selected
* In CSS
    * Hovering effects
    * Choosing good colors
    * Using grid/flexbox
    * Add all webkits
    * Animations
    * Responsivness
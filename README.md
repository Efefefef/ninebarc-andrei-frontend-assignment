# Berlin Ticket Advisor

## Reasoning

As a guest of the city I am interested in a range of possible ticket options.
Use cases would differ from getting a ticket from airport to hotel to getting a prolonged time ticket.
I exclude Student tickets, Bicycle tickets, BC-zone tickets as users of those must be well aware of possible options themselves. 
I exclude Tourist ticket as to sell tourist attractions for the city is not my goal, and the questionnaire together with calculation would become unreasonably complicated. 

I've calculated prices per ride for different tickets and found the way to split up all options into few 
equivalence classes based on number of days in the city and integer number of rides per day, pictured on the scheme:
https://miro.com/app/board/o9J_ld3pRVE=/

This allowed me to utilise 3 questions with 3-4 possible answers for the whole decision tree. 
This should be short and easy to choose enough, still providing beneficial recommendation in the end.


## How To Run

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.

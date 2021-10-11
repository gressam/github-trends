# Github copy

This project is the solution for React developer task. The main purpose of this project is to build github trends page.

For this task was provided APIs:

https://gh-trending-api.herokuapp.com/repositories

https://gh-trending-api.herokuapp.com/developers

But both of these methods are returning the CORS error. Also it was noted that instead of API we can use the github-trends-api library. But it also has a CORS error. 

I’ve spent some time researching some other APIs or Libs, but looks like most of them are referring to the initial one from you :)

So, in order not to block the development I decided to deliver the task as is, so you could at least check my code style, patterns, how I write the code in general and then we could discuss it. 

Due to the CORS issue the tasks weren't tested properly, but in case you have a relevant backend, I’d be able to cover that asap. 

## Filters

To make the filters posible, we needed to find the filters array. For this purpose a JS script was created that parsed the DOM of GitHub to get labels and values for each filter.

## Scripts

In the project directory, you can run:

### `npm run install`

Before starting the app you need to download the libraries

### `npm run start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



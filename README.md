# JS-Frontend-Test Homework

I have prepared the challenge with 'create-react-app'.
You can just clone/download the repository and just run`npm install` and `npm start` in the directory to see it locally.
Or you can see the build version here: https://todguzel.github.io/happystars-gh-pages

Note: Doesn't render anything when the Stars-API is deactive. (when the Heroku app displays 'Application Error')

## Explanation about the task steps:

### Task 0 - Writing & Thoughts

* My latest proudest achievement is the last website we built at my workplace: https://www.erzgebirge-gedachtgemacht.de
My biggest challenge as the only frontend developer working in the project was managing all the different components and the states of the UX elements scalable & manageable even though we give the client the flexibility of changing / customizing layouts, components, background/text/button colors and a ton of further options.

* I've recently finished “Design Systems” by Alla Kholmatova. I loved it because it's a great solution to one problem I used face daily, which I can roughly describe as 'preventing frontend from becoming the Jenga game'. The book has pretty useful tips and tricks about creating & managing well organised frontend structures, which include design principles, design guidelines, component libraries and sustaining that whole system. I absolutely recommend it to the web designers and frontend developers who create / develop complicated digital products such as websites with hundreds of components, modules and flexible layouts.

### Task 1 - Showing a static HTML page

You can see the 'Hello World' message on the homepage of the 'happy-stars' react-app.

### Task 2 - Add a Menu & Single-Page-Site

I've created the menu/pages with React Router. And as you can see it's a single web app. You can also see that the active menu item is highlighted.

### Task 3 - Loading Data from a REST-Service

You can see all the universes on the 'Universes' page and all the stars on the 'Stars' page.
I depicted the maximum/current size of the universe with a little visual bar. And on the 'Stars' page, you can see to which universe the star belongs to. The star colors are looped through in SCSS for styling.

### Task 4 - JavaScript Tool Chain

As you already know create-react-app used WebPack so here I didn't see the need to do anything extra for bundling/optimizing. I've only included SCSS to my 'watch'.

### Task 5 - Create Unit-Tests for your JS

This is the part where I don't have professional experience with. I have only created a test for the api call which passes the test with 'npm test'. App.test.js comes with 'react-create-api'.

### Task 6 - CRUD for universes

For the sake of UX, I've included an element with a plus in the end of universes & stars list for 'Create-View'. These have their forms switched on on click and have 'POST' Method attached to them on Submit. When you click on one of the universes, you can see the stars that belong to that specific universe (Details-View). In the Details-View of the universe, you can see the same UI feature for 'Create-Star-View' which, when activated (clicked for the form), adds a star to that specific universe. And when you hover over the stars, you can see the UI feature for 'Delete-Button'.

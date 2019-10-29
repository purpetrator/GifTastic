# GifTastic

Goal: Make an interactive website using the GIPHY API

This is a project showing my skills with AJAX, APIs, and JQuery.

> Deployed: https://github.com/purpetrator/GifTastic

# Parameters of the project:

- Create an array of strings, each one related to a topic that interests you.

- Your app should take the topics in this array and create buttons in your HTML.

- When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

- When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

- Under every gif, display its rating (PG, G, so on).

- Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.

# Overview

I made a Russia-inspired app that pulls GIFs with the GIPHY API.

The app has a few buttons already on the page. The user can add more buttons by entering new terms into the input field.

When the buttons are clicked, 10 GIFs are pulled from GIPHY's database and displayed as still images. The images can be clicked to animate them, and they can be clicked again to revert them into a still state.

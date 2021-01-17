![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

# Burger

## Description
Burger logger application using MYSQL, Node, Express, Handlebars and homemade ORM. Whenever a user submits a burger's name, the app will display the burger on the left side of the page, waiting to be devoured. Each burger entry will be saved in a database, whether devoured or not.

## Links
* [Github Repository](https://github.com/jkaganovsky/Burger)
* [Heroku](https://eat-or-not-burger.herokuapp.com/)


## Installation & Usage
FEATURES
1. Adds a new burger to your "TO EAT...OR NOT TO EAT" column using the text field when enter or the "ADD BURGER!" button is clicked.
1. Moves a burger from the list to the "DEVOURED" column when the "DEVOUR ME!" button is clicked.
1. Moves a burger back to the "TO EAT...OR NOT TO EAT" column when the "NAH! I CHANGED MY MIND" button is clicked.


GITHUB
1. Clone this repository from my [Github Repository](https://github.com/jkaganovsky/Note-Taker) link.
1. Run your local computer's terminal and git clone this repository to save to your local computer.
1. Install Node.js to your local computer if you don't have it (https://nodejs.org/en/).
1. Run `npm i inquirer` from your computer's terminal to install the **Inquirer** package to the cloned repository's folder.
1. Run `node server.js` or `npm run watch` on your terminal.
1. Open your browser with the filepath localhost:3000 to start the application.


HEROKU
* Open the [Heroku](https://eat-or-not-burger.herokuapp.com/) link and start using the application

## Content
DEMO

![HTML gif](./public/assets/img/eat-da-burger.gif)


## Credits
1. My fellow developers at UW Coding Bootcamp
1. My husband, Sergei Kaganovsky, a Software Development Engineer at Amazon AWS - https://www.linkedin.com/in/sergeik/
1. My Trilogy Education Tutor, Jacob Carver - https://www.linkedin.com/in/jacob-carver-software-developer125b81191/


## License
MIT License

Copyright (c) [2021] [Jailanie Kaganovsky]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

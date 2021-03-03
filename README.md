# Choose your own coding adventure

[![GitHub](https://img.shields.io/github/license/thompson-1657/professional_readme_generator?color=%230288d1)](LICENSE)

## Description

---

This application is a choose your own adventure game with a coding theme. It uses [Passport.js](http://www.passportjs.org/) to first authenticate a user by having them sign up or login if they have previously signed up to play the game. Once the user enters their credentials they are taken to a member’s page where they can create their character and start the adventure! Upon creating a character the user will be directed to the game play page. By clicking “Start the Game” in the middle of the game page the choices will begin. The user has multiple choices that will lead them in varying paths where they will collect experience points and items along the way! There is also an awesome dark mode feature if the user would like to change the look of their game play environment.

## Table of Contents

---

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#Technologies)
- [Contributors to the project](#Contributors-to-the-project)
- [License](#license)
- [Questions](#questions)

## Installation

---

To install the Create Your Own Coding Adventure application the user can start by cloning the application from the repository onto their local machine.

```
https://github.com/thompson-1657/create_your_own_adventure.git
```

Once cloned the user can run

```
npm install
```

in the terminal to install the package.json and the node modules. Be sure to change the username and password in the config.json file in the config folder to your MySQL username and password in order to connect. The application can then be run in the terminal command line by entering

```
node server.js
```

## Usage

---

[![recording](https://user-images.githubusercontent.com/71091515/109575730-02887300-7ab8-11eb-8f6d-c30fc86c7d7a.gif)](https://drive.google.com/file/d/1rb9qef3pBB_NICao0MRrh6q1E0KYkBj3/view)
Click gif to link to the full usage video.

To use the application start by signing up or logging in with an email and password. Once logged in click the "Begin your journey" button and create a name for your character. On the game page the user can find a Members button, a Dark-Mode button and a Logout button. The Members button will navigate the user back to the members page where they can create a new character name. The Dark-mode button will toggle between the deafault style of the game page and a dark-mode option. The Logout button logs the user out of the game. If pressed the user must sign back in in order to reach the game page again.

The left side of the page displays the character info, which updates based on the path the user chooses.

The middle of the page contains a scrollable story path with choices the user must decide between. The results of these choices will influence the character stats and the items the user acquires.

The right side of the page is the Inventory. The inventory lists the items the user is able to acquire throughout their journey. Each item can be hovered over for a short description of what the item is.

The application is responsive and user friendly on a vast variety of devices. On a smaller device the center storyline becomes the main content of the screen and a modal populates that contains the character information and inventory.

## Technologies

---

- HTML
- CSS
- JavaScript
- jQuery
- Handlebars
- Sequelize
- Nes.css
- Node.js
- Passport
- Express
- Bootstrap

## Contributors to the project

---

**Nicholas Vrtis** - [https://github.com/Nvrtis](https://github.com/Nvrtis)

**Paul Nguyen** - [https://github.com/pnguyen6910](https://github.com/pnguyen6910)

**Negasi Michael** - [https://github.com/negasimichael](https://github.com/negasimichael)

**Rachel Thompson** - [https://github.com/thompson-1657](https://github.com/thompson-1657)

## License

---

[MIT License](LICENSE)

## Questions

---

If you have any questions regarding the functionality or use of this application feel free to contact contributing members of the project via the contact information listed on their respective GitHub profiles.

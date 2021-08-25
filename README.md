# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![image](https://user-images.githubusercontent.com/60710331/130725036-4bae507b-9c20-4516-848b-f7b99151b2d7.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/Nytezerak/faq_challenge/)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

-CSS can be very tricky, learning him is like a walk in the park on an dangerous neighborhood, it's cool but one fake step can cause chaos.

-Just abused from position
```
.ilustrationFaqDesktop{
    position: absolute;
    margin: -40% 0 0 -18%;
    width: 110%;
    z-index: 1;
}

.ilustrationDesktopImg{
    width: 100%;
    position: absolute;
    z-index: 1;
}

.ilustrationShadowFaqDesktop{
    position: relative;
    width: 100%;
    z-index: 0;
}

.ilustrationDesktopShadow{
    margin-top: -75%;
    margin-left: -100%;
    width: 200%;
    z-index: 0;
}

.ilustrationDesktopBox{
    position: absolute;
    z-index: 4;
    margin-left: -30%;
    margin-top: -10%;
    width: 45%;
}
```
-It was good to learn each function of fixed, absolute and relative.

### Continued development

- With future aknowledge I hope to find a better way to the ".sideGradient", at this point it looked fine but it can be better.

## Author

- Frontend Mentor - [@Nytezerak](https://www.frontendmentor.io/profile/Nytezerak)
- Instagram - [@Nytezeraj](https://www.instagram.com/nytezerak)


## Acknowledgments

Special thanks to my mentor FizzyDrinks, who always help me with any doubt 🥇 (https://github.com/fizzy-drinks)

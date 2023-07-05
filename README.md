# Expanding testimonials

This project is one that I designed and built myself. I've always been curious about expanding elements, like FAQ sections, reviews, or testimonials. For this particular project, I chose to focus on testimonials, as they contain multiple types of content including pictures, names, and the testimonials themselves.

## Table of contents

- [Overview](#overview)
  - [Functionality](#functionality)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Functionality

Users should be able to:

- Click on a testimonial to expand it.
- View the contents of the testimonial.

### Screenshots

![](/screenshots/screenshot1.jpg)

### Links

- Live Site URL: [GitHub Pages](https://aref-akminasi.github.io/expanding-testimonials/)

## My process

### Built with

- HTML5
- CSS3
- JavaScript

### What I learned

Getting the expansion and collapse mechanisms to work correctly proved to be a challenge, particularly because one card closes as another opens. To address this, I introduced a slight delay before adding the 'active' class to the expanding card. Fine-tuning the timing and order of events was somewhat tricky.

```js
cards.forEach((card) => {
  card.addEventListener('click', () => {
    if (card.classList.contains('active')) {
      card.classList.remove('active');
    } else {
      closeCards(); //The function 'closeCards' will close all cards (it will take it 0.3s to close because of the transition) that is why a setTimeout is used for the delay
      setTimeout(() => {
        card.classList.add('active');
      }, 500);
    }
  });
});
```

### Continued development

What I'm still looking forward to learning is how to create animations for expanding elements, as well as transformations of icons during expansion and collapse.

## Author

**Aref Akminasi**

- LinkedIn - [Aref Akminasi](https://www.linkedin.com/in/aref-akminasi-91412b207/)
- Twitter - [@aref_akminasi](https://twitter.com/aref_akminasi)

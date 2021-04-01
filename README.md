# Job listings with filtering - Frontend Mentor

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

![Design preview for the Job listings with filtering coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

#### Filtering Option

Use the [data.json](./data.json) file to pull the data and then dynamically add the content. This would be perfect if you're looking to practice a JS library/framework like React, Vue, or Svelte.

To add a filter, the user needs to click on the tablets on the right-side of the listing on desktop or the bottom on mobile. For each filter added, only listings containing all selected filters should be returned.

### Links

- Solution URL: [Add solution URL here](https://miniprojects3.gatsbyjs.io/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Gatsby.js](https://www.gatsbyjs.com/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/) - For hosting

### What I learned

This is how I filtered job lists.

```js
const skillSet = new Set(tabletsList);
return keywords.every((keyword) => skillSet.has(keyword));
```

How to not ignore a specific directory

```
public/*        // ignore all files under public
!public/images  // except images directory
```

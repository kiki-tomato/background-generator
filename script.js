"use strict";

//select element
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const btn = document.querySelector(".random");

//function
//01. change background color and text
const setGradient = function () {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
  css.textContent = body.style.background;
};

//02. generate randon colors with button clicking
const hexCharacters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const getCharacter = function (i) {
  return hexCharacters[i];
};

//randomNum 0 ~ 15
const generateColor = function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * hexCharacters.length);
    hexColor += getCharacter(randomNum);
  }
  return hexColor;
};

const generateColors = function () {
  color1.value = generateColor();
  color2.value = generateColor();
  setGradient();
};

//the color inputs match the background generated on the first page load
body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

//display the initial css gradient property
css.textContent = body.style.background;
// css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

//input : anytime the input value changes, we can detect it
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
//we want to call the function when the input is selected. so without parantheses

//click random color btn
btn.addEventListener("click", generateColors);

//textContent: adds a text content

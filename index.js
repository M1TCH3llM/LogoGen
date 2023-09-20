const inquirer = require("inquirer");

const fs = require("fs");

const { Circle, Square, Triangle, Banana, SVG } = require("./lib/shapes");
const { Console } = require("console");

const questions = [
  {
    name: "shape",
    type: "list",
    message: "Choose a shape?",
    choices: ["circle", "triangle", "square", "banana"],
  },
  {
    name: "corner",
    type: "list",
    message: "Would you like rounded Edges (in percent)?",
    choices: ["0", "10", "15", "20"],
    when: (answer) => answer.shape === "square",
  },
  {
    name: "outLineChoice",
    type: "list",
    message: "Would you like to add an outline to your shape?",
    choices: ["Yes", "No"],
  },
  {
    name: "outLine",
    type: "list",
    message: "How thicc would you like your outline?",
    choices: ["5", "10", "15"],
    when: (answer) => answer.outLineChoice === "Yes",
  },
  {
    name: "outLineColor",
    type: "list",
    message: "What color would you like your out line?",
    choices: [
      "black",
      "red",
      "blue",
      "pink",
      "green",
      "purple",
      "yellow",
      "orange",
      "white",
    ],
  },
  {
    name: "shapeColorChoice",
    type: "list",
    message: "Basic or custom color?",
    choices: ["Basic Colors", "Custom Color"],
  },
  {
    name: "shapeColor",
    type: "list",
    message: "What color would you like your shape?",
    choices: [
      "black",
      "red",
      "blue",
      "pink",
      "green",
      "purple",
      "yellow",
      "orange",
      "white",
    ],
    when: (answer) => answer.shapeColorChoice === "Basic Colors",
  },
  {
    name: "shapeColor",
    type: "input",
    message: "input Hex key for custom color",
    when: (answer) => answer.shapeColorChoice === "Custom Color",
  },
  {
    name: "text",
    type: "input",
    message: "What three letters would you like for your logo?",
    validate: (input) => {
      if (input.length !== 3) {
        return `Please enter a three letter Logo.`;
      }
      return true;
    },
  },
  {
    name: "textWeight",
    type: "list",
    message: "What weight would you like your font?",
    choices: ["lighter", "normal", "bold", "bolder"],
  },
  {
    name: "font",
    type: "list",
    message: "What type of font would you like?",
    choices: [
      "serif",
      "sans-serif",
      "monospace",
      "cursive",
      "fantasy",
      "system-ui",
      "ui-serif",
      "ui-sans-serif",
      "ui-monospace",
      "ui-rounded",
      "emoji",
      "math",
      "fantasy",
      "fangsong",
    ],
  },
  {
    name: "textColorChoice",
    type: "list",
    message: "Choose a shape?",
    choices: ["Basic Colors", "Custom Color"],
  },
  {
    name: "textColor",
    type: "list",
    message: "What color would you like your text?",
    choices: [
      "black",
      "red",
      "blue",
      "pink",
      "green",
      "purple",
      "yellow",
      "orange",
      "white",
    ],
    when: (answer) => answer.textColorChoice === "Basic Colors",
  },
  {
    name: "textColor",
    type: "input",
    message: "input Hex key for custom color",
    when: (answer) => answer.textColorChoice === "Custom Color",
  },
];

function bananas() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);

    const {
      shape,
      shapeColor,
      outLine,
      outLineColor,
      text,
      textColor,
      textWeight,
      font,
      corner,
    } = answers;

    let userShape;

    switch (shape) {
      case "circle":
        userShape = new Circle(shapeColor, outLine, outLineColor);
        break;
      case "square":
        userShape = new Square(shapeColor, outLine, outLineColor, corner);
        break;
      case "triangle":
        userShape = new Triangle(shapeColor, outLine, outLineColor);
        break;
      case "banana":
        userShape = new Banana(shapeColor, outLine, outLineColor);
        break;
    }

    const svg = new SVG(text, textColor, textWeight, font, userShape);

    const mySVG = svg.render();

    fs.writeFile("newLogo.svg", mySVG, (err) =>
      err
        ? console.log("🚫🍌")
        : console.log("🍌🍌 New Logo made nice job 🍌🍌")
    );
  });
}

bananas();

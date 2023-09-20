const inquirer = require("inquirer");

const fs = require("fs");

const { Circle, Square, Triangle, SVG } = require("./lib/shapes");

const questions = [
  {
    name: "shape",
    type: "list",
    message: "Choose a shape?",
    choices: ["circle", "triangle", "square"],
  },
  {
    name: "shapeColorChoice",
    type: "list",
    message: "Choose a shape?",
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

    const { shape, shapeColor, text, textColor } = answers;

    let userShape;

    switch (shape) {
      case "circle":
        userShape = new Circle(shapeColor);
        break;
      case "square":
        userShape = new Square(shapeColor);
        break;
      case "triangle":
        userShape = new Triangle(shapeColor);
        break;
    }

    const svg = new SVG(text, textColor, userShape);

    const mySVG = svg.render();

    fs.writeFile("newLogo.svg", mySVG, (err) =>
      err
        ? console.log("🚫🍌")
        : console.log("🍌🍌 New Logo made nice job 🍌🍌")
    );
  });
}

bananas();

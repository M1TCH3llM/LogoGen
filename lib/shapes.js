class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<circle cx="50%" cy="50%" r="80" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<rect x="50" y="25" width="200" height="150" fill="${this.color}"/>`;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<polyline points="150, 25 50, 175 250, 175" fill="${this.color}"/>`;
  }
}

class SVG {
  constructor(text, textColor, shape) {
    this.text = text;
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
          ${this.shape.render()}
        
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${
            this.text
          }</text>
        
        </svg>`;
  }
}
// let shape;

//user chooses Circle
//  shape = new Circle(userChoice.color)
// const svg = new SVG("text", "textcolor", shape)

// const mySVG = svg.render()
// fs.writeFileSync("mycoolsvg.svg", mySVG)

module.exports = { Circle, Square, Triangle };

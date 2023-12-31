class Shape {
  constructor(color, strokeWidth, lineColor) {
    this.color = color;
    this.strokeWidth = strokeWidth;
    this.lineColor = lineColor;
  }
}

class Circle extends Shape {
  constructor(color, strokeWidth, lineColor) {
    super(color, strokeWidth, lineColor);
  }
  render() {
    return `<circle cx="50%" cy="50%" r="80" stroke="${this.lineColor}" stroke-width="${this.strokeWidth}"  fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  constructor(color, strokeWidth, lineColor, corner) {
    super(color, strokeWidth, lineColor);
    this.corner = corner;
  }
  render() {
    return `<rect x="75" y="25" width="150" height="150" stroke="${this.lineColor}" stroke-width="${this.strokeWidth}"  fill="${this.color}" rx="${this.corner}"/>`;
  }
}

class Triangle extends Shape {
  constructor(color, strokeWidth, lineColor) {
    super(color, strokeWidth, lineColor);
  }
  render() {
    return `<polyline points="150, 25 50, 175 250, 175" stroke="${this.lineColor}" stroke-width="${this.strokeWidth}"  fill="${this.color}" transform="translate(-3, -20)"/>`;
  }
}

class Banana extends Shape {
  constructor(color, strokeWidth, lineColor) {
    super(color, strokeWidth, lineColor);
  }
  render() {
    return `<g transform="scale(.75)"><path fill="${this.color}" stroke-width="${this.strokeWidth}" stroke="${this.lineColor}"  stroke-linecap="round" stroke-linejoin="round" d="M8.64,223.948c0,0,143.468,3.431,185.777-181.808c2.673-11.702-1.23-20.154,1.316-33.146h16.287c0,0-3.14,17.248,1.095,30.848c21.392,68.692-4.179,242.343-204.227,196.59L8.64,223.948z" transform="translate(30)"/>`;
  }
}

class SVG {
  constructor(text, textColor, textWeight, font, shape) {
    this.text = text;
    this.textColor = textColor;
    this.textWeight = textWeight;
    this.font = font;
    this.shape = shape;
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
          ${this.shape.render()}
        
          <text x="150" y="125" font-family="${
            this.font
          }" font-size="60" font-weight="${
      this.textWeight
    }" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>`;
  }
}

module.exports = { Circle, Square, Triangle, Banana, SVG };

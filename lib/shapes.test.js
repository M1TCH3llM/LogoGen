const { Circle, Triangle, Square, Banana } = require("./shapes");

describe("Circle", () => {
  test("Should render instance of Circle", () => {
    const shape = new Circle();

    expect(shape instanceof Circle).toBe(true);
  });
  test("Should set color property", () => {
    // it("SHould set specific property to something",()=>{
    const color = "blue";
    const shape = new Circle(color);

    expect(shape.color).toEqual(color);
    //     expect(typeof "hello").toBe("string")
    // })
  });
  test("Should render Circle svg element", () => {
    // it("SHould set specific property to something",()=>{
      const lineColor = "green"
      const strokeWidth = "10"
      const color = "blue"
    const shape = new Circle(color, strokeWidth, lineColor);

    expect(shape.render()).toEqual(
      `<circle cx="50%" cy="50%" r="80" stroke="${lineColor}" stroke-width="${strokeWidth}"  fill="${color}"/>`
    );
    //     expect(typeof "hello").toBe("string")
    // })
  });
});



describe("Triangle", () => {
  test("Should render instance of Triangle", () => {
    const shape = new Triangle();

    expect(shape instanceof Triangle).toBe(true);
  });
  test("Should set color property", () => {
    // it("SHould set specific property to something",()=>{
    const color = "blue";
    const shape = new Triangle(color);

    expect(shape.color).toEqual(color);
    //     expect(typeof "hello").toBe("string")
    // })
  });
  test("Should render Triangle svg element", () => {
    // it("SHould set specific property to something",()=>{
      const lineColor = "green"
      const strokeWidth = "10"
      const color = "blue"
    const shape = new Triangle(color, strokeWidth, lineColor);

    expect(shape.render()).toEqual(
      `<polyline points="150, 25 50, 175 250, 175" stroke="${lineColor}" stroke-width="${strokeWidth}"  fill="${color}" transform="translate(-3, -20)"/>`
    );
    //     expect(typeof "hello").toBe("string")
    // })
  });
});

describe("Square", () => {
  test("Should render instance of Square", () => {
    const shape = new Square();

    expect(shape instanceof Square).toBe(true);
  });
  test("Should set color property", () => {
    // it("SHould set specific property to something",()=>{
    const color = "blue";
    const shape = new Square(color);

    expect(shape.color).toEqual(color);
    //     expect(typeof "hello").toBe("string")
    // })
  });
  test("Should render square svg element", () => {
    // it("SHould set specific property to something",()=>{
      const lineColor = "green"
      const strokeWidth = "10"
      const color = "blue"
      const corner = "15"
    const shape = new Square(color, strokeWidth, lineColor, corner);

    expect(shape.render()).toEqual(
      `<rect x="75" y="25" width="150" height="150" stroke="${lineColor}" stroke-width="${strokeWidth}"  fill="${color}" rx="${corner}"/>`
    );
    //     expect(typeof "hello").toBe("string")
    // })
  });
});

describe("Banana", () => {
  test("Should render instance of Square", () => {
    const shape = new Banana();

    expect(shape instanceof Banana).toBe(true);
  });
  test("Should set color property", () => {
    // it("SHould set specific property to something",()=>{
    const color = "blue";
  
    const shape = new Banana(color);

    expect(shape.color).toEqual(color);
    //     expect(typeof "hello").toBe("string")
    // })
  });
  test("Should render square svg element", () => {
    // it("SHould set specific property to something",()=>{
    const lineColor = "green"
    const strokeWidth = "10"
    const color = "blue"
    const shape = new Banana(color, strokeWidth, lineColor);

    expect(shape.render()).toEqual(
      `<g transform="scale(.75)"><path fill="${color}" stroke-width="${strokeWidth}" stroke="${lineColor}"  stroke-linecap="round" stroke-linejoin="round" d="M8.64,223.948c0,0,143.468,3.431,185.777-181.808c2.673-11.702-1.23-20.154,1.316-33.146h16.287c0,0-3.14,17.248,1.095,30.848c21.392,68.692-4.179,242.343-204.227,196.59L8.64,223.948z" transform="translate(30)"/>`
    );
    //     expect(typeof "hello").toBe("string")
    // })
  });
});



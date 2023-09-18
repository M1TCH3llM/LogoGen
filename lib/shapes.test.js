const { Circle, Triangle, Square } = require("./shapes");

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
  test("Should render circle svg element", () => {
    // it("SHould set specific property to something",()=>{
    const shape = new Circle("blue");

    expect(shape.render()).toEqual(
      '<circle cx="50%" cy="50%" r="80" fill="blue"/>'
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
  test("Should render triangle svg element", () => {
    // it("SHould set specific property to something",()=>{
    const shape = new Triangle("blue");

    expect(shape.render()).toEqual(
      '<polyline points="150, 25 50, 175 250, 175" fill="blue"/>'
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
    const shape = new Square("blue");

    expect(shape.render()).toEqual(
      '<rect x="50" y="25" width="200" height="150" fill="blue"/>'
    );
    //     expect(typeof "hello").toBe("string")
    // })
  });
});

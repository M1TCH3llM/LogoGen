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
      '<polyline points="150, 25 50, 175 250, 175" fill="blue" transform="translate(-3, -20)"/>'
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

// describe("Banana", () => {
//   test("Should render instance of Square", () => {
//     const shape = new Banana();

//     expect(shape instanceof Banana).toBe(true);
//   });
//   test("Should set color property", () => {
//     // it("SHould set specific property to something",()=>{
//     const color = "blue";
//     const shape = new Banana(color);

//     expect(shape.color).toEqual(color);
//     //     expect(typeof "hello").toBe("string")
//     // })
//   });
//   test("Should render square svg element", () => {
//     // it("SHould set specific property to something",()=>{
//     const shape = new Banana("blue");

//     expect(shape.render()).toEqual(
//       '<g transform="scale(.75)">
//       <path fill="blue" stroke="#f7c562" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" d="M8.64,223.948c0,0,143.468,3.431,185.777-181.808c2.673-11.702-1.23-20.154,1.316-33.146h16.287c0,0-3.14,17.248,1.095,30.848
//   c21.392,68.692-4.179,242.343-204.227,196.59L8.64,223.948z" transform="translate(30)"/>'
//     );
//     //     expect(typeof "hello").toBe("string")
//     // })
//   });
// });



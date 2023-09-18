

const {Circle, Triangle, Square} = require('./shapes');

describe("Circle", ()=>{
    test("Should render instance of Circle",()=>{
        const shape = new Circle()

        expect(shape instanceof Circle).toBe(true)
    })
    test("Should set color property",()=>{
        // it("SHould set specific property to something",()=>{
            const color = "blue"
        const shape = new Circle(color)

        expect(shape.color).toEqual(color)
        //     expect(typeof "hello").toBe("string")
        // })
    })
    test("Should render circle svg element",()=>{
        // it("SHould set specific property to something",()=>{
        const shape = new Circle("blue")

        expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="80" fill="blue" />')
        //     expect(typeof "hello").toBe("string")
        // })
    })
})
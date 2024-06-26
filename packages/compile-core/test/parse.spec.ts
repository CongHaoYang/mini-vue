import { NodeTypes } from "../src/ast";
import { baseParse } from "../src/parse";
describe("parse", () => {
    
    it("interpolation", () => {
        const ast = baseParse("{{message}}")

        // root
        expect(ast.children[0]).toStrictEqual({
            type: NodeTypes.INTERPOLATION,
            content: {
                type: NodeTypes.SIMPLE_EXPRESSION,
                content: "message"
            }
        })
    })
})

describe("element", () => {
    it("simple element div", () => {
        const ast = baseParse("<div></div>");

        expect(ast.children[0]).toStrictEqual({
            type: NodeTypes.ElEMENT,
            tag: "div",
            children: [],
        })
    })
})

describe("test", () => {
    it("simple test", () => {
        const ast = baseParse("some text");

        expect(ast.children[0]).toStrictEqual({
            type: NodeTypes.TEXT,
            content: "some text"
        })
    })
})

test("hello world", () => {
    const ast = baseParse("<div>hi,{{ message }}</div>")

    expect(ast.children[0]).toStrictEqual({
        type: NodeTypes.ElEMENT,
        tag: "div",
        children: [
            {
                type: NodeTypes.TEXT,
                content: "hi,"
            },
            {
                type: NodeTypes.INTERPOLATION,
                content: {
                    type: NodeTypes.SIMPLE_EXPRESSION,
                    content: "message"
                }
            }
        ]
    })
})

test("nested element", () => {
    const ast = baseParse("<div><p>hi</p>{{message}}</div>");

    expect(ast.children[0]).toStrictEqual({
        type: NodeTypes.ElEMENT,
        tag: "div",
        children: [
            {
                type: NodeTypes.ElEMENT,
                tag: "p",
                children: [
                    {
                        type: NodeTypes.TEXT,
                        content: 'hi',
                    }
                ]
            },
            {
                type: NodeTypes.INTERPOLATION,
                content: {
                    type: NodeTypes.SIMPLE_EXPRESSION,
                    content: "message"
                }
            }
        ]
    })

})

test('should throw error when lack end tag', () => {
    expect(() => {
        baseParse("<div><span></div>")
    }).toThrow("缺少结束标签:span")
})
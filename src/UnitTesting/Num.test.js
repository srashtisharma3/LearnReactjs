import increament, {decreament} from "./Num"

describe("Increament function testing", () => {
    test("Increament function increase by 1", () => {
        expect(increament()).toBe(1)
    })
})

describe("Decreament function testing", () => {
    test("Decreament function decrease by 1", () => {
        expect(decreament()).toBe(0)
    })
})
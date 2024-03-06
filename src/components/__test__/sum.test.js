import { sum } from "../sum";

test("sum of two numbers",()=>{
    const c = sum(2,3)

    expect(c).toBe(5)
})
const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered } = require("../challenges/week9");

describe("sumMultiples", () => {
    test("receive an array of numbers and should return the sum of any numbers which are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });
    test("receive an array of numbers and should return the sum of any numbers which are a multiple of 3 and 5 with decimal numbers", () => {
        const result = sumMultiples([3, 5.0, 10]);
        const expected = 18;
        expect(result).toBe(expected);
    });
});

describe("isValidDNA", () => {
    test("This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only", () => {
        const result = isValidDNA("C", "G", "T", "A", "O", "B")
        const expected = true;
        expect(result).toBe(expected);
    });
    test("This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only", () => {
        const result = isValidDNA("P", "L", "F", "M", "O", "B")
        const expected = false;
        expect(result).toBe(expected);
    });
});


describe("getComplementaryDNA", () => {
    test("returns error if str is undefined", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");
    })
    test("receive valid DNA string and return complementary base pairs", () => {
        const result = getComplementaryDNA("TCAG");
        const expected = "AGTC";
        expect(result).toBe(expected);
    });
    test("fails if it does not receive a valid base pair", () => {
        expect(() => {
            getComplementaryDNA("HIJK");
        }).toThrow("no valid DNA base");
    });
})

describe("isItPrime", () => {
    test("receives a number and returns true", () => {
        const result = isItPrime(7);
        const expected = true;
        expect(result).toBe(expected);
    });
    test("receives a number and returns false", () => {
        const result = isItPrime(8);
        const expected = false;
        expect(result).toBe(expected);
    })
})

describe("createMatrix", () => {
    test("returns a matrix of 1 * 1 when passed 1", () => {
        const result = createMatrix(1, "foo");
        const expected = [["foo"]];
        expect(result).toEqual(expected);
    });
    test("returns a matrix of 3 * 3 when passed 3", () => {
        const result = createMatrix(3, "foo");
        const expected = [
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"],
        ];
        expect(result).toEqual(expected);
    });
});

describe("areWeCovered", () => {
    test("The function should show false if there are no staff covering", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);
    });

    test("to return false if there are less than 3 staff in", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Thursday"] },
            { name: "scott", rota: ["Monday", "Tuesday"] },
            { name: "sarah", rota: ["Monday", "Tuesday"] },
            { name: "phill", rota: ["Monday", "Tuesday"] },
        ];
        const day = "Wednesday";

        expect(areWeCovered(staff, day)).toBe(false);
    });
    test("to return true if there are 3 staff in", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Thursday"] },
            { name: "scott", rota: ["Monday", "Tuesday"] },
            { name: "sarah", rota: ["Monday", "Tuesday"] },
            { name: "phill", rota: ["Monday", "Wednesday"] },
        ];
        const day = "Monday";

        expect(areWeCovered(staff, day)).toBe(true);
    });
});

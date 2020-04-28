const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner } = require("../challenges/week10");

describe("sumDigits", () => {
    test("when nothing is input to return an error", () => {
        expect(() => {
            sumDigits();
        }).toThrow("a number is required");
    });
    test("to receive a number and return the sum of all those numbers", () => {
        const result = sumDigits(123);
        const expected = 6;
        expect(result).toEqual(expected);
    });
});


describe("createRange", () => {
    test("creates a range of numbers as an array", () => {
        const result = createRange(5, 15, 2);
        const expected = [5, 7, 9, 11, 13, 15];
        expect(result).toEqual(expected);
    });
    test("creates a range of numbers as an array", () => {
        const result = createRange(5, 10);
        const expected = [5, 6, 7, 8, 9, 10];
        expect(result).toEqual(expected);
    });
});

describe("getScreentimeAlertList", () => {
    test("return an array of usernames of users who have used more than 100 mins of screentime for a given date", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ]
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"])
    });
});

describe("hexToRGB", () => {
    test("This function transforms a hex code into an RGB code", () => {
        const hexStr = "FF1133"

        expect(hexToRGB(hexStr)).toEqual("rgb(255,17,51)")
    });
    test("this function fails if it doesn't receive valid hexstring", () => {
        const hexStr = "QVWXYZ"
        expect(hexToRGB(hexStr)).toBe("rgb(0,0,0)")
    });
});

describe("findWinner", () => {
    test("This function take 0's and X's board as an array and returns 'X' if player X has won, '0' if player 0 has won, null if its a draw", () => {
        const board = [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ]
        expect(findWinner(board)).toBe("X")
    });
    test("This function returns null when a board is complete and there is no winner", () => {
        const board = [
            ["X", "0", "X"],
            ["X", "X", "0"],
            ["0", "X", "0"]
        ]
        expect(findWinner(board)).toBe(null)
    });
});
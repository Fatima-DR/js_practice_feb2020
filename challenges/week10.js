

const sumDigits = n => {
  if (!n) throw new Error("a number is required");
  if (n === undefined) throw new Error("n is required");

  let sum = 0;
  const string = n.toString();

  for (let i = 0; i < string.length; i++) {
    sum = sum + parseInt(string.substring(i, i + 1));
  }

  return sum;
};


const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");

  if (step !== undefined) {
    return Array.from({ length: (end - start) / step + 1 }, (_, i) => start + (i * step))
  } else {
    step = 1
    return Array.from({ length: (end - start) / step + 1 }, (_, i) => start + (i * step))

  }
};


const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  const usersOver100 = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const data = user.screenTime.filter(d => d.date === date);
    if (data.length > 0) {
      const usage = data[0].usage;
      const totalScreenTime = Object.values(usage).reduce((a, b) => a + b);
      if (totalScreenTime > 100) {
        usersOver100.push(user.username);
      }
    }
    return usersOver100;
  }
};


const hexToRGB = hexStr => {
  if (hexStr === "") throw new Error("incorrect hexStr");
  if (hexStr === undefined) throw new Error("hexStr is required");

  let combine = parseInt(hexStr, 16);
  let r = (combine >> 16) & 255;
  let g = (combine >> 8) & 255;
  let b = combine & 255;

  return "rgb(" + r + "," + g + "," + b + ")";
};


const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  for (i = 0; i < board.length; i++){
    for (j = 0; j < board[i].length; j++){
      if (board[i][0] === "X" && board[i][0] === board[i][1] && board[i][0] === board[i][2] ||
        board[0][j] === "X" && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
        return "X"
      } else if (board[i][0] === "0" && board[i][0] === board[i][1] && board[i][0] === board[i][2] ||
        board[0][j] === "0" && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
        return "0"
      }
    }
  } return null
  
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};

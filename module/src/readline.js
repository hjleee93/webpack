const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const {getCircleArea, getSquareArea} = require('./mathUtil.js');
const {logInput, logResult, logFigureError} = require('./log.js');

rl.question("원하는 도형을 작성해주세요.( 정사각형, 원 ) : ", figure => {
  console.log(figure);

  switch (figure) {
    case "정사각형":
      rl.question("변의 길이를 입력해주세요 : ", input => {
        console.log(logInput(input))
        console.log(logResult ( figure, getSquareArea(input)));
        rl.close();
      });
      break;
    case "원":
      rl.question("반지름의 길이를 입력해주세요 : ", input => {
        console.log(logInput(input))
        console.log(logResult ( figure, getSquareArea(input)));

        rl.close();
      });
      break;
    default:
      console.log(logFigureError);
      rl.close();
  }
})
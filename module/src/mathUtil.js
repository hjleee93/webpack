const PI = 3.14;
const getCircleArea = r => r * r * PI;
const getSquareArea = d => d * d;



/* commonjs 1번 */
module.exports = {
  PI,
  getCircleArea,
  getSquareArea
}

/* commonjs 2번 */
// exports.PI = PI;
// exports.getCircleArea = getCircleArea;

//1번과 2번은 같은 의미이다.

/* esm
  export default 는 원하는 이름으로 내보내기가 가능하고 import 하는 부분에서 객체만을 가져올 수는 없다.
 */
// export { PI, getCircleArea, getSquareArea };
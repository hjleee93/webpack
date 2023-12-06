
// const { getCircleArea } = require('./mathUtil');
// import { getCircleArea } from './mathUtil.js';

// const result = getCircleArea(2);
// console.log(result)

import "normalize.css";
import styles from "./index.css";

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello webpack';

  console.log(styles)
  element.classList = styles.helloWebpack;

  return element;
}

document.body.appendChild(component());
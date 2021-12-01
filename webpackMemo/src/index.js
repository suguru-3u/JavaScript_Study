// import _ from 'lodash';
// import './style.css';
// import './style.scss'
// import log from './logo.png';

// // import {NAME,niJoou} from './utitlt'
// // import * as utilities from './utitlt'
// // const say = utilities.default;

// function component(){
//     const element = document.createElement('div');
//     const arry = ['hello','webpack','!'];
//     element.innerHTML = _.join(arry,' ');
//     return element;
// }

// document.body.appendChild(component());
// document.body.classList.add('haikei');

// const image = new Image();
// image.src = log;
// document.body.appendChild(image);

// // console.log(utilities.niJoou(2));
// // console.log(utilities.NAME);
// // console.log(say.say());

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './style.scss';

ReactDOM.render(
    <div>Hello,React!</div>,
    document.getElementById('root')
)
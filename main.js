// // // // // // // // var a = "aa";
// // // // // // // // a = 123

// // // // // // // // let b = "bb";
// // // // // // // // b = 456

// // // // // // // // const　array = [1,2,3];
// // // // // // // // const　array_2 = [
// // // // // // // //     [1,2,3],
// // // // // // // //     ["赤","青","緑"]
// // // // // // // // ];


// // // // // // // // console.log(a);
// // // // // // // // console.log(typeof b);
// // // // // // // // console.log(array_2);

// // // // // // // // オブジェクト
// // // // // // // const menber = {
// // // // // // //     // キー：バリュー
// // // // // // //     'name':'本田',
// // // // // // //     'height':175
// // // // // // // };

// // // // // // // // console.log(menber['name']);

// // // // // // // const mener_2 = {
// // // // // // //     '本田':{
// // // // // // //         'height':170,
// // // // // // //         'hobody':'サッカー'
// // // // // // //     },
// // // // // // //     '香川':{
// // // // // // //         'height':165,
// // // // // // //         'hobody':'サッカー'
// // // // // // //     }
// // // // // // // };

// // // // // // // console.log(mener_2['香川']['height']);


// // // // // // // const mener_3 = {
// // // // // // //     '1kumi':{
// // // // // // //         '本田':{
// // // // // // //             'height':170,
// // // // // // //             'hobody':'サッカー'
// // // // // // //         },
// // // // // // //         '香川':{
// // // // // // //             'height':165,
// // // // // // //             'hobody':'サッカー'
// // // // // // //         }
// // // // // // //     },
// // // // // // //     '2kumi':{
// // // // // // //         '田中':{
// // // // // // //             'height':170,
// // // // // // //             'hobody':'サッカー'
// // // // // // //         },
// // // // // // //         '飯部':{
// // // // // // //             'height':165,
// // // // // // //             'hobody':'サッカー'
// // // // // // //         }
// // // // // // //     }
// // // // // // // };

// // // // // // // console.log(mener_3);

// // // // // // // const height = 90;

// // // // // // // if(height === 90){
// // // // // // //     console.log('log');
// // // // // // // }
// // // // // // // const score = 90;

// // // // // // // const comment = score > 80 ? 'good': 'but';

// // // // // // // console.log(comment);

// // // // // // const numbers = [10,20,30];

// // // // // // // one of them
// // // // // // for(number of numbers){
// // // // // //     console.log(number);
// // // // // // }

// // // // // function test(){
// // // // //     console.log("test");
// // // // //     return 1;
// // // // // }

// // // // // const number = test();
// // // // // console.log(number);

// // // // const a = ' test';
// // // // // const b = 'aaa';

// // // // console.log(a);
// // // // console.log(a.trim());

// // // const mener_3 = {
// // //     '1':{
// // //         '本田':{
// // //             'height':170,
// // //             'hobody':'サッカー'
// // //        },
// // //         '香川':{
// // //             'height':165,
// // //             'hobody':'サッカー'
// // //         }
// // //     }
// // // };
// // // // // // //     },
// // // // // // //     '2kumi':{
// // // // // // //         '田中':{
// // // // // // //             'height':170,
// // // // // // //             'hobody':'サッカー'
// // // // // // //         },
// // // // // // //         '飯部':{
// // // // // // //             'height':165,
// // // // // // //             'hobody':'サッカー'
// // // // // // //         }
// // // // // // //     }
// // // // // // // };



// // // // const myMap = new Map();
// // // // myMap.set('kumi',mener_3);
// // // // myMap.set('name','本田');

// // // // console.log(myMap);

// // // // console.log(myMap.get('name'));

// // // // const valueList = myMap.values();
// // // // for( value of valueList){
// // // //     console.log(value);
// // // // }


// // // // '1kumi':{
// // //     // // // //         '本田':{
// // //     // // // //             'height':170,
// // //     // // // //             'hobody':'サッカー'
// // //     // // // //         },
// // //     // // // //         '香川':{
// // //     // // // //             'height':165,
// // //     // // // //             'hobody':'サッカー'
// // //     // // // //         }
// // //     // // // //     },


// // // //  const frutis = [
// // // //         'リンゴ',
// // // //         'バナナ'
// // // // ];
// // // // // シンタックスシュガー
    
// // // //     frutis.push('みかん');
    
// // // //     // ■コールバック関数
// // // //     // 関数の入力に関数が使われること
// // // //     frutis.forEach(function test(input){
// // // //         console.log(input);
// // // //     });
    

// // // const getName = name => name + 'さん';

// // // console.log(getName('田中'));
    
    
// // // const scores = [10,20,30,40,50];
// // // const newScores = scores.filter(value => {
// // //     return value >= 30;
// // // });

// // // console.log(newScores);

// // // const userList = [10,20,30,40,50];
// // // const userIdList = userList.map(value =>  `user_${value}`);

// // // console.table(userIdList);


// // // const postalCode = '123-4566';

// // // function checkPostalCode(string){
// // //     const replaced = string.replace('-','');
// // //     const length = replaced.length;

// // //     if(length === 7){
// // //         return true;
// // //     }

// // //     return false;
// // // }

// // // console.log(checkPostalCode(postalCode));



// // // const postal = {

// // //     postalCode:'123-4567',
    
// // //     checkPostalCode(){
// // //         const replaced = this.postalCode.replace('-','');
// // //         const length = replaced.length;

// // //         if(length === 7){
// // //             return true;
// // //         }

// // //         return false;
// // //     }

// // // }
// // // console.log(postal.checkPostalCode(this.postalCode));

// // // const test = document.getElementById('test').classList.add('red');

// // // console.log(test);

// // // const eee = document.querySelectorAll('.test1');
// // // eee.classList.add('bule');
// // // console.log(eee);

// // const ancor = document.createElement('a');
// // console.log(ancor);

// const target = document.getElementById('target');
// const newDiv = document.createElement('div');
// newDiv.id = 'test';
// newDiv.classList.add('red');
// newDiv.textContent = 'test';
// console.log(newDiv);
// // target.appendChild(newDiv);
// target.parentNode.appendChild(newDiv);

// const targetList = document.getElementById('divList');
// const reference = document.querySelector('.div2');
// const newElement = document.createElement('div');

// newElement.classList.add('div4');
// newElement.textContent = '追加分';
// targetList.insertBefore(newElement,reference);

'use strict';

const model = document.getElementById('modal');
const show = document.getElementById('modal__show');
const close = document.getElementById('modal__close');
const backGround = document.getElementById('modal__background');

show.addEventListener('click',() =>{
    model.classList.add('is-show');
    backGround.classList.add('is-show');
});

close.addEventListener('click',() =>{
    model.classList.remove('is-show');
    backGround.classList.remove('is-show');
});

backGround.addEventListener('click',() =>{
    close.click();
});


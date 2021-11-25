// this = オブジェクトを参照している
// コンテキストによって変わる？


let a = 0;

console.log(a);

function b(){
    console.log(this.arguments,a);
}

b();
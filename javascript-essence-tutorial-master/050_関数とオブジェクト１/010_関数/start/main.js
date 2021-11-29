function fn(a,b){
    console.log(a,b);
}

// ↓が実行される
function fn(a,b = 1){
    console.log(a,b);
}

fn(1);
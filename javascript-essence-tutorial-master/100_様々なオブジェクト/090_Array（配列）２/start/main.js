const arry = [1, 2, 3, 4, 5];

// arry.forEach((v,i,arry)=>{
//     console.log(v);
// });

const newArry =  arry.map((v)=>{
    // console.log(v);
    return v * 2;
});


const filterArry =  arry.filter((v,i,arry)=>{
    
    return v > 2 ;
});

console.log(arry,newArry,filterArry);


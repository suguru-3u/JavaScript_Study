// fetch('users.json')
// .then(function(response){
//     // console.log(response);
//     return response.json();
// }).then(function(json){
//     console.log(json);
//     for(const user of json){
//         console.log(`I am ${user.name}, ${user.age} years old`);
//     }
// });

async function fetchUsers(){
    const resoponse = await fetch('users.json');
    if(resoponse.ok){
        const json = await resoponse.json();
        if(!json.length){
            throw new NodataError('no data found');
        }
        return json;
    }
}

class NodataError extends Error{
    constructor(message){
        super(message);
        this.name = 'NodataError';
    }
}

async function init(){
    try{
        const users =  await fetchUsers();
        for(const user of json){
            console.log(`I am ${user.name}, ${user.age} years old`);
        }
    }catch(e){
        if(e instanceof NodataError){
            console.log('The End');
        }else{
            console.error(e);
        }
    }finally{
        console.log('bye');
    }
}

init();

// try{
//     console.log('start');
//     throw new Error();
//     console.log('end');
// }catch(e){
//     console.error(e);
// }finally{
//     console.log('bye');
// }
import moduleA from './moduleA.js'

import('./moduleA.js').then(function(modules){
    console.log(modules);
})
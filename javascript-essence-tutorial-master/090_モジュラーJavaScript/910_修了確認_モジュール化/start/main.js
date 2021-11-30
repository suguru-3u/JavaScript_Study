
async function fn(){
    const modules = await import('./calc.js');
    modules.default.plus(5);
    modules.default.minus(3);
    modules.default.multiply(3);
    modules.default.divide(2);
}

fn();
function component(){
    const element = document.createElement('div');
    const arry = ['hello','webpack'];
    element.innerHTML = _.join(arry,' ');
    return element;
}

document.body.appendChild(component());

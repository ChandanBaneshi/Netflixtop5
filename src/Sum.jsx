function add (a,b){
    let sum = a+b;
    return sum;
}

 function sub(a,b){
    let subs = a-b;
    return  subs;
}

function mult(a,b){
    let Mult = a*b;
    return Mult;
}
function div (a,b){
    let Div = a/b;
    Div = Div.toFixed(3)
    return Div;
}
export default add; 
export {sub,mult, div};
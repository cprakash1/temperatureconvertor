const faren=document.getElementById('i2');
const kelvin=document.getElementById('i3');
const celcius=document.getElementById('i1');

const roundoff =  a => a.toFixed(2);

faren.addEventListener('input',()=>{
    let f=parseInt(faren.value);
    let c=((f-32)*5)/9;
    let k=c+273
    kelvin.value=roundoff(k);
    celcius.value=roundoff(c);
});
celcius.addEventListener('input',()=>{
    let c=parseInt(celcius.value);
    let f=((c*9)/5)+32;
    let k=c+273
    kelvin.value=roundoff(k);
    faren.value=roundoff(f);
});
kelvin.addEventListener('input',()=>{
    let k=parseInt(kelvin.value);
    let c=k-273
    let f=((c*9)/5)+32;
    faren.value=roundoff(f);
    celcius.value=roundoff(c);
});
let prompt;
let inBrowser = false
if(typeof window === 'undefined'){
    prompt = require("prompt-sync")();
    
}
else{
    prompt= window.prompt;
    inBrowser = true;
}

const arr=[];
var arryLength = parseInt(prompt('Enter the total number of array elements you want:'));

function getArrayFunction(){
for (i=0; i<arryLength;i++){
    var newElement= parseInt(prompt(`Enter the ${i+1} item of array:`));
    arr.push(newElement);
    }
    return arr;
}


var result=[];
function trasformationarray(inputarr, number){
    for (i = 0; i<inputarr.length; i++){
        inputarr[i] = inputarr[i]*number;
    }
    return inputarr;
    }


inputarr=getArrayFunction();
const number = parseInt(prompt("Enter the number you want to multiply the function from:"));
console.log(`The initial array is ${inputarr}`);
if (inBrowser){
    document.write('THE Initial Array is: '+ inputarr + '<br>');
}
result = trasformationarray(inputarr,number);

console.log(`The transformed array is ${result}`);
if (inBrowser){
    document.write('THE Transformed Array is: '+ result);
}

let prompt;
if(typeof window === 'undefined'){
    prompt = require("prompt-sync")();
}
else{
    prompt= window.prompt;
}
const number = parseInt(prompt("How Many * Do you want?"))
let asterisk = ""
for(let i=number;i>0; i--){
    
    for (let j= 1; j<=i;j++){
       asterisk = '*' + asterisk   
    }
     console.log(asterisk)
  asterisk = '';
  }
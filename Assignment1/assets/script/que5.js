let inBrowser = false;
if (typeof window === 'undefined'){
    inBrowser = false;
}
else{
    inBrowser = true;
}
var arr = [{
    id: 1,
    name: 'John',
}, {
    id: 2,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew',
 }];

 function sortBy(array,key) {
    let sortedName = array.sort(
        (p1,p2)=>(p1[key]>p2[key])? 1: (p1[key]<p2[key])?-1:0);
    return(sortedName);   
 }

var sorted = sortBy(arr, 'name');
console.log(sorted);
if (inBrowser){
document.write("The required values answer is printed in console");
}
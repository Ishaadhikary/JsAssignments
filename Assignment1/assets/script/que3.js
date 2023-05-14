let inBrowser = false;

if (typeof window === "undefined") {
  inBrowser = false;
} else {
  inBrowser = true;
}

const fruits = [
  { id: 1, name: "Banana", color: "Yellow" },
  { id: 2, name: "Apple", color: "Red" },
];

searchByKey(fruits, "name", "Apple");

function searchByKey(funcName, keyVal, val) {
  val = val.toLowerCase();
  for (i = 0; i < funcName.length; i++) {
    funcName[i].name = funcName[i].name.toLowerCase();
    if (val === funcName[i].name) {
      console.log(funcName[i]);
    }
  }
}

searchByVal(fruits, "Apple");
function searchByVal(funcName, val) {
  val = val.toLowerCase();
  for (i = 0; i < funcName.length; i++) {
    funcName[i].name = funcName[i].name.toLowerCase();
    if (val === funcName[i].name) {
      console.log(funcName[i])
      if (inBrowser){
        document.write('The required values answer is printed in console')
      }
    } 
  }
}

const obj = {
    name: "John",
    country: {
     name: "Armenia",
     code: 374,
    }
  };

let newObj = {};
function changeKeyValue(param){ 
  for(let key in param){
    if(typeof param[key] === "object") {
        changeKeyValue(param[key])
    }else {
      newObj[param[key]] = key;      
    }
  }
 }

 changeKeyValue(obj);
console.log(newObj);

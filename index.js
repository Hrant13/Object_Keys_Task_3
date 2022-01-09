const obj = {
    name: "John",
    country: {
     name: "Armenia",
     code: 374,
    }
  };

let newObj = {};
function changeKeyValue(json){ 
  for(let key in json){
    if(typeof json[key] === "object") {
        changeKeyValue(json[key])
    }else {
      newObj[json[key]] = key;      
    }
  }
 }

 changeKeyValue(obj);
console.log(newObj);
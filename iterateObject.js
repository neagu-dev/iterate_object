function iterateObject(obj) {
   for(prop in obj) {
  	if(typeof(obj[prop]) == "object"){
    	iterateObject(obj[prop]);
    } else {
    	if(prop == "id" || prop == "pageId") {console.log(obj[prop]);
      	  // Do something with this data
      }
    }
  }
|

function iterateObject(obj) {
   for(let prop in obj) {
   if(typeof(obj[prop]) == "object"){
     obj[prop] =  iterateObject(obj[prop]);
   } else {
     if(prop == "pageId") {
         //do something
     }
   }
   }
   return obj;
}

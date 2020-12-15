contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}

for(key in contact){
    contact.push(key + ":" + contact[key])
    console.log(contact);
    
}


// var person = {fname:"John", lname:"Doe", age:25}; 
  
//   var text = "";
//   var x;
//   for (x in person) {
// //     text += person[x] + " ";

//  let _output = []
//     for(let _key in _contact){
//     // Code goes here
//       _output.push(_key + " : " + _contact[_key])
//     }
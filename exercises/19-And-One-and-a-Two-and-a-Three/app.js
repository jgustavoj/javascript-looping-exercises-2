contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}
let value = " ";
for(key in contact){
    value += key + " : " + contact[key] + " "; 
    // Code goes here
}

console.log(value);
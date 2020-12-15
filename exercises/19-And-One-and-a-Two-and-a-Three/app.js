contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}
let result = " ";
for(key in contact){
    result += key + " : " + contact[key] + " ";
    // Code goes here
}

console.log(result);
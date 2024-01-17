// singletonn

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rishi",
    "Full Name": "Rishikesh Joshi",
    [mySym]: "myKey1",
    age: 25,
    location: "Pune",
    email: "rishi@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);


JsUser.email = "rishi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "rishi@microsoftx.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

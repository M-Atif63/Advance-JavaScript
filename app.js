// console.log("hello")

// Function Decleration
// appKaName("ali")
// function appKaName(name){
//     console.log(`mera Name ${name} hai`)
// }



// Function Expression or Definition
// var appKaName = function(name){
//     console.log(`mera name ${name} hai`)
// }
// appKaName("ali")



// Arrow Function
// var appKaName = (x,y) => {
//     console.log(`total ${x+y}`)
// }
// appKaName(2,3)


// Function Constructor
// function Person(naam, umer, degree){
//     this.name = naam;
//     this.age = umer;
//     this.taleem = degree;

//     console.log(`mera naam ${this.name} hai`)
// }

// var per1 = new Person("ali",18,"BBA")
// var per2 = new Person("ahmed",20,"MBA")
// console.log(per1.name)


// Object Method
// var objectMethod = {
//     myfunc : function (x,y) {
//         console.log(x+y)
//     }
// }
// objectMethod.myfunc(10,100)

// Difference Between Synchronous And Asynchronous

// Synchronous Example
// console.log("bacha tayaar hai")
// var myfunc = (function() {
//     alert("bacha nikal gaya")
// })
// myfunc()
// console.log("bacha pohoch gaya")



// Asynchronous Example

// console.log("bacha ghar se nikal gaya");

// setTimeout(function(){
//     console.log("bacha pohonch gaya")
// },2000);

// console.log("bacha bus me beth gaya");



// function result(name,callback) {
//     console.log("Hello" + name)
//     callback(3000)
// }
// function total() {
//     console.log("main callback function hu")
// }
// result("ali",total)


// function MyFunc(name, id) {
//     console.log(`Hello ${name} Your id is ${id}`)
// }
// MyFunc("ahmed",123)
// var stu1 = new MyFunc("ali", 786)

// function Stu (name,id) {
//     this.naam:name
//     rollNum:id
// }
// Stu("ahmed",123)
// var stu1 = new Stu ("ali",786)
// console.log(Stu(stu1.naam))


// function Students (naam,umer,clas){
//     this.name = naam,
//     this.age = umer,
//     this.class = clas

//     console.log(`Hello ${this.name} your age is ${this.age} and your class is ${this.class}`)

// }
// Students("ali",12,8)

// var Detail = function (name, umer, clas) {
//     this.Name = name
//     this.Age = umer
//     this.class = clas

//     // console.log(`Hello My Name is ${this.name} and My age is ${this.Age} and My class is ${this.class}`)
// }
// Detail("ali", 15, "9th")
// var stu1 = new Detail("bilal",18, 12)
// console.log(stu1.class)

// var num = [1,2,3,4,5,6,7,8,9,10]
// var text= "";
// num.forEach(myFunc)
// // document.getElementById("demo").innerHTML = text
// document.getElementById("demo") = text
// function myFunc (value){
//     text += value + "<br>"
// }


// var names = ["bilal", "ali", "hamid", "saad", "asad"]

// var text = "";

// names.forEach(space)

// document.getElementById("demo").innerHTML = text;

// function space(space) {
//     text += space +"<br>";
// }

// // var students = ["asad","saad","ali","bilal"]

// var studentsFather = ["Muhammed","Ahmed","Faizan","Liaqat"]

// // var fullNameOfStu = studentsFather + students

// space = "";

// studentsFather.forEach(action)

// document.getElementById("demo").innerHTML = space;

// function action (value) {
//     space += value + "<br>";
// }

// var calculation = [2 * 2, 2 + 5, 5 - 2, 1 * 10]

// gap = "";

// calculation.forEach(result)

// document.getElementById("demo").innerHTML = gap

// function result (value) {
//     gap += value + "<br>"
// }



// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// document.getElementById("demo").innerHTML = JSON.stringify(numbers2);

// function myFunction(value) {
//   return value ;
// }


// var num1 = [1,12,15,25,26]
// var num2 = num1.map(action)

// document.getElementById("demo").innerHTML = JSON.stringify(num2)

// function action (value) {
//     console.log(value)
//     return value * 3;
// }

// function output (some) {
//     document.getElementById("demo").innerHTML = some
// }

// function input (num1,num2) {
//     var adding = num1 + num2;
//     return adding
// }

// var result = input(12,12)

// output(result)

// var num = [1, 12, 15, 25, 26]
// var num1 = num.map(action)

// document.getElementById("demo").innerHTML = JSON.stringify(num1)

// function action(value) {
//     return value * 2
// }


// function output (some) {
//     document.getElementById("demo").innerHTML = some;
// }
// function input (num1,num2,callback) {
//     var addition = num1 + num2;
//     callback(addition)
// }
// input(12,12,output)

// setTimeout(action,2000)
// function action () {
//     var message = "Hello"
//     document.getElementById("demo").innerText = message;
// }






















// // console.log("hello")

// const per1 = {name:"Ali",roll:123}
// const per2 = {name:"saad",roll:234}
// const per3 = {name:"ahmed",roll:345}

// function report(output) {
//     return output + " " + this.name;
// }

// console.log(report.call(per1,"Hello"))

// var per1 = {
//     name:"Ali",
//     detail:function(city){
//         console.log("mera Name " + this.name + " our me " + city + " se Belong Karta hu")
//     }
// }
// var per2 = {
//     name:"bilal"
// }


// var per3 = {
//     name:"Ahmed"
// }


// per1.detail("Karachi");

// per1.detail.call(per2,"lahore")

// per1.detail.call(per3,"karachi")

// var stu1 = {
//     name:"ali",
//     intro:function(city) {
//     console.log(`My Name ${this.name} And My City Is ${city}`)
//     }
// }
// var stu2 = {
//     name:"Ahmed"
// }
// stu1.intro("karachi")
// stu1.intro.apply(stu2,["lahore"])
// stu1.intro.call(stu2,"lahore","ali")



// var student1 = {
//     name:"ali",
//     Details:function(){
//         console.log(`Mera Naam ${this.name} hai`)
//     }
// }
// // var stuDetail = student1.Details;
// // stuDetail();
// var moreDetail = student1.Details.bind(student1);
// moreDetail();

// var car1 = {
//     naam:"Civic",
//     detail:function(){
//         console.log(`Meri Car Ka Naam ${this.naam} Hai`)
//     }
// }
// var carDetail = car1.detail.bind(car1)
// carDetail();





















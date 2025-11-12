// // Factory functions-------

// function vehicles(type, brand, model, year) {
//   return {
//     type,
//     brand,
//     model,
//     year,
//     favVehicle: function () {
//       console.log(
//         ` my vehicle is for ${this.type} it is from ${this.brand} and the model is
//      ${this.model} year ${this.year}`
//       );
//     },
//   };
// }

// const yuvraj = vehicles("Bike", "royalEnfeild", "hunter", 2025);
// console.log(yuvraj);
// yuvraj.favVehicle();

// // Constructor---------

// function Car(brand, model) {
//   this.brand = brand;
//   this.model = model;
//   this.drive = function () {
//     console.log(`${this.brand} ${this.model} is driving`);
//   };
// }

// const car1 = new Car("Tata", "Nexon");
// //   practice 2 ------\

// function YourSelf(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;

//   this.intro = function () {
//     console.log(`Name: ${this.name} Age : ${this.age} Gender :${this.gender}`);
//   };
// }

// const person1 = new YourSelf("rishabh", 20, "male");
// console.log(person1.name);
// person1.intro();

// // object.create()

// // let person = {
// //   greet: function () {
// //     console.log(`hello my name is ${this.firstName} ${this.lastName}`);
// //   },
// // };

// // const rishu = Object.create(person);
// // rishu.firstName = "rishabh";
// // rishu.lastName = "singh";
// // rishu.greet();

// // let ayush = Object.create(person, {
// //   firstName: { value: "Ayush" },
// //   lastName: { value: "singh" },
// // });

// // ayush.greet();

// // Classes------------ Prototypal Inheritance-------------------

class Hero {
  constructor(name, level) {
    (this.name = name), (this.level = level);
    console.log(`${this.name} ${this.level}`);
  }
  greet() {
    console.log(`${this.name} say hello.`);
  }
}
const hero = new Hero("iron man", 100);
console.log(hero.greet());

class Mage extends Hero {
  constructor(name, level, power) {
    super(name, level);
    this.power = power;
    // console.log(`${this.name} and my level is ${this.level} power is ${power}`);
  }
}
const hero1 = new Mage("spider-man", 90, "spider-sense");
console.log(hero1.greet());

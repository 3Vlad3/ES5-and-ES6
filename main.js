"use strict";

function Humburger(size, staffing) {
  this.size = size;
  this.staffing = staffing;
  this.toppings = [];
}


Humburger.SMALL_SIZE = 'SMALL_SIZE';
Humburger.LARGE_SIZE = 'LARGE SIZE';
Humburger.SIZE = {
  [Humburger.SMALL_SIZE]: {
    price: 50,
    calories: 20,
  },
  [Humburger.LARGE_SIZE]: {
    price: 100,
    calories: 40,
  }
}
Humburger.STAFFING_CHEES = 'STAFFING CHEES';
Humburger.STAFFING_SALAD = 'STAFFING SALAD';
Humburger.STAFFING_POTATO = 'STAFFING POTATO';
Humburger.STAFFING = {
  [Humburger.STAFFING_CHEES]: {
    price: 10,
    calories: 20,
  },

  [Humburger.STAFFING_POTATO]: {
    price: 15,
    calories: 10,
  },
  [Humburger.STAFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
}
Humburger.TOPPING_SPICE = 'TOPPING SPICE';
Humburger.TOPPING_SAUCE = 'TOPPING SAUCE';
Humburger.TOPPING = {

  [Humburger.TOPPING_SAUCE]: {
    price: 20,
    calories: 5,
  },
  [Humburger.TOPPING_SPICE]: {
    price: 15,
    calories: 0,
  },
}
const HAMBURGER_METHOD = {
  addToppings(toping) {
    if (!this.toppings.includes(toping)) {
      return this.toppings.push(toping);
    } else {
      console.log('Alredy added');
    }
  },
  removeToppings(toping) {
    return this.toppings = this.toppings.filter(el => el !== toping);
  },
  getSizing() {
    return this.size;
  },
  getStaffing() {
    return this.staffing;
  },
  getToppings() {
    return this.toppings;
  },
  calculateCalories() {
    var caloriesArray = this.toppings.map(function (el) {
      return Humburger.TOPPING[el].price;
    });
    caloriesArray.push(Humburger.SIZE[this.size].calories, Humburger.STAFFING[this.staffing].calories);
    var calories = caloriesArray.reduce(function (accum, calories) {
      return accum + calories;
    }, 0);
    return calories;
  },
  calculatePrice() {
    var priceArray = this.toppings.map(function (el) {
      return Humburger.TOPPING[el].price;
    });
    priceArray.push(Humburger.SIZE[this.size].price, Humburger.STAFFING[this.staffing].price);
    var price = priceArray.reduce(function (accum, price) {
      return accum + price;
    }, 0);
    return price;
  }
};
Humburger.prototype = Object.create(HAMBURGER_METHOD);
var humburger = new Humburger(Humburger.LARGE_SIZE, Humburger.STAFFING_POTATO);
humburger.addToppings(Humburger.TOPPING_SPICE);
humburger.addToppings(Humburger.TOPPING_SPICE);
console.log('Calories: ' + humburger.calculateCalories());
console.log('Price: ' + humburger.calculatePrice());
humburger.addToppings(Humburger.TOPPING_SAUCE);
humburger.removeToppings(Humburger.TOPPING_SPICE);
console.log('Calories: ' + humburger.calculateCalories());
console.log('Price: ' + humburger.calculatePrice());
console.log(humburger)

class Student {
  constructor(name, lastname, birthYear, marks) {
    this.name = name;
    this.lastname = lastname;
    this.birthYear = birthYear;
    this.marks = marks;
    this.absence = new Array(25);
    this.absenceIndex = 0;
    this.age = this.studentAge(birthYear);
    this.presenceFactor = 0.9;
    this.goodMarksMin = 90;
    this.results = {
      NICE: 'Ути какой молодчинка!',
      NORM: 'Норм, но можно лучше',
      BAD: 'Редиска!',
    };
  };
  present() {
    if (this.absence.length > this.absenceIndex) {
      this.absence[this.absenceIndex] = true;
      this.absenceIndex++;
    }
  };
  absent() {
    if (this.absence.length > this.absenceIndex) {
      this.absence[this.absenceIndex] = false;
      this.absenceIndex++;
    }
  };
  get averagePresence() {
    let countePresence = this.absence.splice(0, this.absenceIndex).filter(el => el).length;
    return countePresence / this.absenceIndex;
  };
  studentAge() {
    let today = new Date();
    let age = today.getFullYear() - this.birthYear;
    return age;
  };
  get averageMark() {
    let markAverage = this.marks.reduce((accum, mark) => accum + mark);
    return markAverage / this.marks.length;
  }
  summary() {
    if (this.averageMark < this.goodMarksMin && this.averagePresence < this.presenceFactor) {
      return this.results.BAD;

    } else if (this.averageMark < this.goodMarksMin || this.averagePresence < this.presenceFactor) {
      return this.results.NORM;
    } else {
      return this.results.NICE;
    };
  };
};

let student = new Student('Alex', 'Kim', 1997, [86, 77, 33]);
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.absent();
console.log(`${student.name} ${student.lastname} age: `, student.age);
console.log(`${student.name} ${student.lastname} average marks: `, student.averageMark.toFixed(2));
console.log(student.summary());
let student2 = new Student('Ann', 'Ross', 1999, [88, 99, 100]);
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
console.log(`${student2.name} ${student2.lastname} age: `, student2.age);
console.log(`${student2.name} ${student2.lastname} average marks: `, student2.averageMark.toFixed(2));
console.log(student2.summary());
let student3 = new Student('John', 'Deagle', 1991, [0, 0, 0]);
student3.present();
student3.absent();
student3.absent();
console.log(`${student3.name} ${student3.lastname} age: `, student3.age);
console.log(`${student3.name} ${student3.lastname} average marks: `, student3.averageMark.toFixed(2));
console.log(student3.summary());
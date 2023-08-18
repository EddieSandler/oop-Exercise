class Vehicle {

  constructor(make, model, year) {
    this.make = make,
      this.model = model,
      this.year = year;
  }

  honk() {
    return 'beep';
  }
  toString() {

    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;

  }
}



let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

// console.log(myFirstVehicle.toString())

class Car extends Vehicle {

  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;

  }




}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
// console.log(myFirstCar.toString()); // "The vehicle is a Toyota Corolla from 2005."
// console.log(myFirstCar.honk());     // "Beep."
// console.log(myFirstCar.numWheels);  // 4


class Motorcycle extends Vehicle {

  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;

  }

  revEngine() {
    return 'VROOM!!!';
  }

}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
// console.log(myFirstMotorcycle.numWheels)

class Garage {

  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];

  }


  add(vehicle) {

    if (!(vehicle instanceof Vehicle)) {
      return 'only vehicles allowed';
    }

    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";

    } else {

      this.vehicles.push(vehicle);
      return 'vehicle added';
    }

  }

}
let garage = new Garage(2);

console.log(garage.add(new Car("Hyundai", "Elantra", 2015))); // "Vehicle added!"

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)));
console.log(garage.vehicles);
console.log(garage.add("Taco"))


interface Product {
  name: string;
  price: number;
}

interface Motorcycle extends Product {
  runByTwoWheels(): void;
}

interface Car extends Product {
  runByFourWheels(): void;
}

interface ProductAbstractFactory {
  createMotorcycle(): Motorcycle;
  createCar(): Car;
}

class CarProduct implements Car {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  runByFourWheels(): void {
    console.log(
      `Hello, I'm a car, my name is: ${this.name}, my price is: ${this.price} and I run by four wheels.`
    );
  }
}

class MotorcycleProduct implements Motorcycle {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  runByTwoWheels(): void {
    console.log(
      `Hello, I'm a motorcycle, my name is: ${this.name}, my price is: ${this.price} and I run by two wheels.`
    );
  }
}

export class CreateProduct implements ProductAbstractFactory {
  createMotorcycle(): Motorcycle {
    return new MotorcycleProduct('some motorcycle name', 2000);
  }

  createCar(): Car {
    return new CarProduct('some car name', 15000);
  }
}

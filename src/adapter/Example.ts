export class CarProduct {
  private price: number;

  constructor(_price: number) {
    this.price = _price;
  }

  getPrice(): number {
    return this.price;
  }
}

export class GetCarPrice {
  getCarPrice(car: CarProduct): number {
    return car.getPrice();
  }
}

export class GetPriceWithInterest {
  getWithInterest(num: number): number {
    return num * 1.05;
  }
}

export class GetPriceAdapter extends GetCarPrice {
  constructor(private adaptee: GetPriceWithInterest) {
    super();
  }

  getCarPrice(car: CarProduct): number {
    return this.adaptee.getWithInterest(car.getPrice());
  }
}

export class GetPrice {
  logPrice(price: number): void {
    console.log(`This is the price ${price}.`);
  }
}

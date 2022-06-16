import { CreateProduct } from './Example';

describe('ProductAbstractFactory', () => {
  test('create a car', () => {
    const car = new CreateProduct().createCar();
    console.log(car.runByFourWheels());
  });

  test('create a motorcycle', () => {
    const car = new CreateProduct().createMotorcycle();
    console.log(car.runByTwoWheels());
  });
});

import {
  CarProduct,
  GetPrice,
  GetPriceAdapter,
  GetPriceWithInterest,
} from './Example';

describe('Adapter', () => {
  test('get price by adapter', () => {
    const getPrice = new GetPrice();
    const car = new CarProduct(1000);
    const adapter = new GetPriceAdapter(new GetPriceWithInterest());
    getPrice.logPrice(adapter.getCarPrice(car));
  });
});

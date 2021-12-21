import { MissingParamError } from '../errors/missing-paramter-error';
import { AddTransactionController } from './addTransactionController';

const VALID_TRANSACTION = {
  type: 'expense',
  date: new Date(),
  value: 2000,
  currency: 'real',
  description: 'salary',
  processed: false,
  recurring: true,
  recurring_periodicity: 'monthly',
  repeat: false,
  repeat_times: null,
  repeat_periodicity: null,
  category: 'salary',
  tags: [],
  ignore: false,
};

describe('Add Transaction Controller - required fields not provided', () => {
  test('Should return 400 and an Error if field [type] is not provided', async () => {
    const sut = new AddTransactionController();

    const httpRequest = {
      body: {
        date: new Date(),
        value: 2000,
        currency: 'real',
        description: 'salary',
        processed: false,
        recurring: true,
        recurring_periodicity: 'monthly',
        repeat: false,
        repeat_times: null,
        repeat_periodicity: null,
        category: 'salary',
        tags: [],
        ignore: false,
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('type'));
  });

  test('Should return 400 and an Error if field [date] is not provided', async () => {
    const sut = new AddTransactionController();

    const httpRequest = {
      body: {
        type: 'expense',
        value: 2000,
        currency: 'real',
        description: 'salary',
        processed: false,
        recurring: true,
        recurring_periodicity: 'monthly',
        repeat: false,
        repeat_times: null,
        repeat_periodicity: null,
        category: 'salary',
        tags: [],
        ignore: false,
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('date'));
  });

  test('Should return 400 and an Error if field [value] is not provided', async () => {
    const sut = new AddTransactionController();

    const httpRequest = {
      body: {
        type: 'expense',
        date: new Date(),
        currency: 'real',
        description: 'salary',
        processed: false,
        recurring: true,
        recurring_periodicity: 'monthly',
        repeat: false,
        repeat_times: null,
        repeat_periodicity: null,
        category: 'salary',
        tags: [],
        ignore: false,
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('value'));
  });

  test('Should return 400 and an Error if field [currency] is not provided', async () => {
    const sut = new AddTransactionController();

    const httpRequest = {
      body: {
        type: 'expense',
        date: new Date(),
        value: 2000,
        description: 'salary',
        processed: false,
        recurring: true,
        recurring_periodicity: 'monthly',
        repeat: false,
        repeat_times: null,
        repeat_periodicity: null,
        category: 'salary',
        tags: [],
        ignore: false,
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('currency'));
  });
});

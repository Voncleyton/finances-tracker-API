import { AddTransactionController } from "./addTransactionController";

const VALID_TRANSACTION = {
  type: "expense",
  date: new Date(),
  value: 2000,
  currency: "real",
  description: "salary",
  processed: false,
  recurring: true,
  recurring_periodicity: "monthly",
  repeat: false,
  repeat_times: null,
  repeat_periodicity: null,
  category: "salary",
  tags: [],
  ignore: false
}

describe('Add Transaction Controller', () => {

  test('Should return 400 and an Error if type is not provided', async () => {
    const sut = new AddTransactionController();

    const httpRequest = {
      body: {
        date: new Date(),
        value: 2000,
        currency: "real",
        description: "salary",
        processed: false,
        recurring: true,
        recurring_periodicity: "monthly",
        repeat: false,
        repeat_times: null,
        repeat_periodicity: null,
        category: "salary",
        tags: [],
        ignore: false
      }
    }

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("required field not provided: type"));
  });

});

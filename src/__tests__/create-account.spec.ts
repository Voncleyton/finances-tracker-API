type Account = {
  id: string;

  name: string;

  bank_code: number;

  hide_appointments?: boolean;
};

class CreateAccountService {
  async execute({ name, hide_appointments = false, bank_code }: Account) {
    throw new Error('A account with the provided name already exists');
  }
}

describe('Add Account', () => {
  test('Should throw an Error when provided name already exists', async () => {
    const createAccountService = new CreateAccountService();

    const fakeAccount: Account = {
      id: 'any_id',
      name: 'existent_name',
      bank_code: 1234,
    };

    const promise = createAccountService.execute(fakeAccount);
    await expect(promise).rejects.toThrowError(
      'A account with the provided name already exists',
    );
  });

  test.todo('Should throw an Error when provided initial balance < 0');
  test.todo('Should call CreateAccountRepository with correct values');
});

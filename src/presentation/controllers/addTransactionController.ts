import { Controller } from '../protocols/controller';
import { HttpRequest, HttpResponse } from '../protocols/http';

export class AddTransactionController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    return {
      statusCode: 400,
      body: new Error('required field not provided: type'),
    };
  }
}

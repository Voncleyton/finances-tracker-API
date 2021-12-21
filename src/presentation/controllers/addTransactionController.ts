import { MissingParamError } from '../errors/missing-paramter-error';
import { badRequest } from '../helpers/http-helper';
import { Controller } from '../protocols/controller';
import { HttpRequest, HttpResponse } from '../protocols/http';

export class AddTransactionController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const { body: fields } = httpRequest;
    const requiredFields = ['type', 'date'];

    for (const field of requiredFields) {
      if (!fields[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    return {
      statusCode: 400,
      body: new Error('required field not provided: type'),
    };
  }
}

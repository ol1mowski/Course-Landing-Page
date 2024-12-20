import { Request } from 'express';

export type TypedRequestBody<T> = Request & { body: T };

export type PaymentRequestBody = {
  email: string;
  firstName: string;
  lastName: string;
  terms: boolean;
} 
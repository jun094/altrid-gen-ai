class ExtendableError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}

interface CustomErrorInterface {
  message?: string;
  statusCode?: number;
  errorCode?: string;
}

export class CustomError extends ExtendableError {
  statusCode: number;
  errorCode?: string;
  meta?: any;

  constructor({ message, statusCode = 500, errorCode, ...params }: CustomErrorInterface = {}) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.meta = params;
  }
}

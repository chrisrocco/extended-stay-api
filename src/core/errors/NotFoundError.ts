import {AppError} from "./AppError";

export class NotFoundError extends AppError {

    httpStatus: number

    constructor(message) {
        super(message, 404)
    }
}

import {AppError} from "./AppError";

export class NotFoundError extends AppError {
    constructor(message) {
        super(message, 404)
    }
}

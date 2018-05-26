export class AppError extends Error {

    httpStatus: number

    constructor(message, status) {
        super(message)
        Error.captureStackTrace(this, this.constructor)
        this.httpStatus = status || 500
    }
}

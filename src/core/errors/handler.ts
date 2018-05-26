import {AppError} from "./AppError";

export const handleAppErrors = (err, req, res, next) => {
    if(err instanceof AppError)
        return res.status(err.httpStatus)
            .json({ err: err.message })
    next()
}
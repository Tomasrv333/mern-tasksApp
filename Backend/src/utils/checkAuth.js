import createError from './createError.js';
import jwt from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError({ status: 401, message: 'Unauthorized' }));
    }
    return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            return next(createError({ status: 401, message: 'Invalid token' }));
        }else {
            req.user = decoded;
            return next();
        }
    })
}
import Jwt  from "jsonwebtoken";

import createError from "../utils/error.js";

export const verifyToken = (req, res, next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated!"))
    }

    Jwt.verify(token, process.env.JWT, (err, user)=>{
        if(err) return next(createError(403, "Token is not valid!"));
        req.user = user;
        next();
    });
};

export const verifyUser = async (req, res, next) => {
    try {
        await verifyToken(req, res, () => {
            if (req.user.id === req.params.id || req.user.isAdmin) {
                next();
            } else {
                return next(createError(403, "You are not authorized!"));
            }
        });
    } catch (err) {
        // Handle any errors that may occur during token verification
        return next(err);
    }
};

export const verifyAdmin = async (req, res, next) => {
    try {
        await verifyToken(req, res, next,() => {
            if (req.user.isAdmin) {
                next();
            } else {
                return next(createError(403, "You are not authorized!"));
            }
        });
    } catch (err) {
        // Handle any errors that may occur during token verification
        return next(err);
    }
};

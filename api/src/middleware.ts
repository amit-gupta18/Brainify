import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


function userMiddleware(req: Request, res: Response, next: NextFunction) {

    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string , process.env.JWT_SECRET_KEY as string);
    if(decoded)
    {
        // @ts-ignore
        req.userId = decoded.id,
        next()
    }else{
        res.status(403).json({
            message : "You are not logged in "
        })
    }
}

export default userMiddleware;
import jwt from "jsonwebtoken"
import type { Request, Response, NextFunction } from "express"

export const authmiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    try {
        if (!token) {
           return res.status(401).json({
                success: false,
                message: "Invalid users"
            })
        }
        else {
            jwt.verify(token, process.env.JWT_SECRET as string)
            next();
        }
    } catch (error) {
       return  res.status(401).json({
            success: false,
            message:"Invalid users"
        })
    }
}
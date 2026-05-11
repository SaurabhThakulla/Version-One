import jwt from "jsonwebtoken"
import type { Request, Response, NextFunction } from "express"

interface AuthRequest extends Request {
    userId?: any
}

export const authmiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    try {
        if (!token) {
           return res.status(401).json({
                success: false,
                message: "Invalid users"
            })
        }
        else {
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
            req.userId=decoded
            next();
        }
    } catch (error) {
       return  res.status(401).json({
            success: false,
            message:"Invalid users"
        })
    }
}
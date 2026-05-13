import jwt from "jsonwebtoken"
import type { Request, Response, NextFunction } from "express"


export const authmiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        if (!token) {
           return res.status(401).json({
                success: false,
                message: "Invalid users"
            })
        }
        else {
            const secret = process.env.JWT_SECRET
            if (!secret) {
                return res.status(500).json({ success: false, message: "Secret not configured" })
            }
            const decoded = jwt.verify(token, secret)
            if (typeof decoded === "string" || !decoded.id) {
                return res.status(401).json({ success: false, message: "Invalid token" })
            }
            req.userId = { id: decoded.id }
            next();
        }
    } catch (error) {
       return  res.status(401).json({
            success: false,
            message:"Invalid users"
        })
    }
}
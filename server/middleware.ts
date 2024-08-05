import { createClient } from "@supabase/supabase-js";
import type { NextFunction, Request, Response } from "express";

// protected api route 
const protectedRoute = ['/api/v1/product-add', '/api/v1/product-update', '/api/v1/product-delete']

export const expMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl
    if (protectedRoute.includes(url)) {
        console.log('protecred route');
        next()
    }


    next()
}



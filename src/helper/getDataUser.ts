/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextRequest } from 'next/server';
export const getDataUser = async (req: NextRequest) => {
    try {

        const token = req.cookies.get('token')?.value || ''
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN!) as JwtPayload;
        const userId = decoded?.id;
        return userId;
    } catch (error: any) {
        console.log(error.message);
    }
}
//hide
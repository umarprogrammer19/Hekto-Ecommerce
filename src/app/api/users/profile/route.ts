import connect from "@/db_connect/db_connection";
import { NextRequest, NextResponse } from "next/server";
import User from '@/models/userModel';
import { getDataUser } from "@/helper/getDataUser";
connect();
export const GET = async (req: NextRequest) => {
    try {
        const data = await getDataUser(req)
        const user = await User.findOne({ _id: data }).select('-password')
        if (user?.isLogin === false) {
            return NextResponse.json({ message: "please login" }, { status: 404 })
        }
        return NextResponse.json({ user }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
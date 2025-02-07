/* eslint-disable @typescript-eslint/no-explicit-any */
import connect from "@/db_connect/db_connection";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
connect()
export const POST = async (req: NextRequest) => {
    try {
        const request = await req.json()
        const { token } = request
        const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } })
        if (!user) {
            return NextResponse.json({ message: "verify token not found or expired" }, { status: 404 })
        }
        user.isverify = true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined
        await user.save()
        return NextResponse.json({ message: "user verified successfully", success: true }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
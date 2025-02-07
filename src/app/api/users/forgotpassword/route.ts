/* eslint-disable @typescript-eslint/no-explicit-any */
import connect from "@/db_connect/db_connection";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import sendMail from "@/helper/mailer";
connect()
export const POST = async (req: NextRequest) => {
    try {
        const request = await req.json()
        const { email, newPassword, confirmPassword } = request
        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ message: "user not found" }, { status: 404 })
        }
        if (confirmPassword !== newPassword) {
            return NextResponse.json({ message: "confirm password not matched" }, { status: 404 })
        }
        const hashedPassword = await bcryptjs.hash(newPassword, 10)
        user.password = hashedPassword
        await user.save()
        await sendMail({ email: email, emailType: 'RESET', userId: user._id.toString() })
        return NextResponse.json({ message: "password reset successfully", success: true }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
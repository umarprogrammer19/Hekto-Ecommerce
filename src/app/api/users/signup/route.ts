/* eslint-disable @typescript-eslint/no-explicit-any */
import connect from "@/db_connect/db_connection";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import sendMail from "@/helper/mailer";
connect()
export const POST = async (request: NextRequest) => {
    try {
        const req = await request.json()
        const { name, email, password } = req
        const alreadyEmail = await User.findOne({ email })
        if (alreadyEmail) {
            return NextResponse.json({ message: "user already exist" }, { status: 404 })
        }
        const hashedPassword = await bcryptjs.hash(password, 10)
        const user = new User({ name, email, password: hashedPassword })
        await user.save()
        await sendMail({ email: email, emailType: 'VERIFY', userId: user._id.toString() })
        return NextResponse.json({ message: "user created successfully", success: true }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message + 'try again' }, { status: 500 })
    }
}
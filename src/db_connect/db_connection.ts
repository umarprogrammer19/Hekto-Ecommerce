/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
const connect = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URL!);
        const connection = db.connection;
        connection.on('connected', () => {
            console.log(`MongoDB Connected`);
        })
        connection.on('error', (error: any) => {
            console.error(`Error: ${error.message}`);
            process.exit();
        })
        console.log(`MongoDB Connected`);
        return connection
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}
export default connect
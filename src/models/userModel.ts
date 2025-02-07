import mongoose from 'mongoose';

interface UserShema {
    name: string;
    email: string;
    password: string;
    isverify: boolean;
    isAdmin: boolean;
    verifyToken: string | undefined
    verifyTokenExpiry: Date | undefined
    forgotPassword: string | undefined
    forgotPasswordExpiry: Date | undefined
    isLogin: boolean | undefined
}

const userShema: mongoose.Schema<UserShema> = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    isverify: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    verifyToken: String,
    verifyTokenExpiry: Date,
    forgotPassword: String,
    forgotPasswordExpiry: Date,
    isLogin: {
        type: Boolean,
        default: false
    }
});

const User: mongoose.Model<UserShema> = mongoose.models.users || mongoose.model('users', userShema);
export default User
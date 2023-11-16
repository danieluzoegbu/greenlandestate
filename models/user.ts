import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"]
    },
    fullName: {
        type: String,
        required: [true, "Full name is required"],
        minLength: [4, "Full name should be atleast 4 characters long"],
        maxLength: [30, "Full name should be less than 30 characters"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    ssn: {
        type: String,
        required: [true, "Social Security number is required"],
    },
    phonenumber: {
        type: String,
        required: [true, "Password is required"],
    },
    available: {
        type: String,
    },
    savings: {
        type: String,
    },
    current: {
        type: String,
    },
    accountNo: {
        type: String,
    },
    routingNo: {
        type: String,
    },
    history: {
        type: String,
    },
    
})

const User = models.User || model("User", UserSchema)

export default User

import { Schema, model, models } from "mongoose";

// Definicion del esquema del usuario userSchema

const userSchema = new Schema({
    email:{
        type: String,
        required: [true, "Email es requerido"],
        unique: true,
        match:[
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Email is not valid"
        ]
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },

    fullname: {
        type: String,
        required: [true, "Fullname is required"],
        minlength: [3, "Fullname must be at least 3 characters"],
        maxlength: [50, "Fullname must be at most 50 characters"]
    }

});


// Creacion segura del modelo

// validamos si el modelo User ya esta registrado en mongoose.models

const User = models.User || model ('User', userSchema);

// Exportar el modelo ya crado
export default User;
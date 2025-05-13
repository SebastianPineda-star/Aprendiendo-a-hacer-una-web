
import mongoose from "mongoose";

//obtenerla URI de la base de datos desde las variables de entorno que se encuentra en .env
const { MONGODB_URI } = process.env;

//validamos que la URI de mongoDB este definida
//sino esta definida, lanzamos un error para evitar que la aplicacion se quede sin coneccion 

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI nust be defined");
}

//creamos y exportamos la funcion asincrona connectDB
//Esta funcion intentara esatablecer la conexion a la DB

export const connectDB = async () => {
    try {
        //Realizar la conexion y extramos la propiedad connection
        const {connection} = await mongoose.connect(MONGODB_URI);

        //verificar si la conexion fue exitosa
        //connection.readyState === 1 indica que la conexion fue exitosa
        if(connection.readyState === 1) {
            console.log("MongoDB connected");
            return Promise.resolve(true);
        }

    } catch (error) {
        console.error(error);
        return Promise.reject(false);
    }  
};
import mongoose from "mongoose";

const ubicacionesSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: true, unique: true },
        categoria: { type: [String], required: true }, // Array de categorías
        ubicacion: {
            latitud: { type: Number, required: true },
            longitud: { type: Number, required: true }
        }
    },{
        timestamps: true
    }
);

export default mongoose.model("ubicaciones", ubicacionesSchema);
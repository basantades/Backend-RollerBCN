import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        start: { type: Date, required: true },
        description: { type: String },
        location: { type: mongoose.Schema.Types.ObjectId, ref: 'Ubicacion' }, // Relación con Ubicaciones
        category: {
            type: [String], // Array de strings
            required: true,
            enum: ["clase", "ruta", "reunion", "evento"], // Solo permite estas opciones
          },
          level: {
            type: [String], // Array de strings
            enum: ["Iniciación", "Intermedio", "Avanzado"], // Solo permite estas opciones
          }
    },{
        timestamps: true,
      }
);

export default mongoose.model("events", eventsSchema);


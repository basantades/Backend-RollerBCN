import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        start: { type: Date, required: true },
        description: { type: String },
        location: { type: mongoose.Schema.Types.ObjectId, ref: 'Ubicacion' }, // Relación con Ubicaciones
        category: { type: [String], required: true }
    },{
        timestamps: true
    }
);

export default mongoose.model("events", eventsSchema);
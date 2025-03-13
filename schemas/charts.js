import mongoose from "mongoose";

const chartsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        data: [
            {
              label: { type: String, required: true }, 
              value: { type: Number, required: true }  
            }
          ]
    },{
        timestamps: true
    }
);

export default mongoose.model("charts", chartsSchema);
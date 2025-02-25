import "dotenv/config";
import express from "express";
import routesUbicaciones from "./routes/ubicaciones.js";

const app = express();
app.use('/ubicaciones', routesUbicaciones);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT , () => console.log(`Server running on port ${PORT}`));
} catch (error) {
    console.log(error);
}
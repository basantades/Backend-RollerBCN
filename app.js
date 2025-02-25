import "dotenv/config";
import express from "express";
import routesUbicaciones from "./routes/ubicaciones.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/ubicaciones', routesUbicaciones);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT , () => console.log(`Server running on port ${PORT}`));
} catch (error) {
    console.log(error);
}
import "dotenv/config";
import express from "express";
import cors from "cors"; 
import routesUbicaciones from "./routes/ubicaciones.js";
import routesEvents from "./routes/events.js";
import bodyParser from "body-parser";

const app = express();

// app.use(cors()); // abierto sin restricciones

app.use(cors({
    origin: ["http://localhost:4200", "https://rollerbcn.vercel.app/"], // 🔹 3. Permitir solo peticiones desde Angular
    methods: "GET,POST,PUT,DELETE", 
    allowedHeaders: "Content-Type,Authorization"
  }));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/ubicaciones', routesUbicaciones);
app.use('/events', routesEvents);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT , () => console.log(`Server running on port ${PORT}`));
} catch (error) {
    console.log(error);
}
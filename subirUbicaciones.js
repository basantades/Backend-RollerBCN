import mongoose from "mongoose";
import dotenv from "dotenv";
import ubicacionesController from "./controllers/ubicacionesController.js"; // Importamos el controlador

dotenv.config();

const ubicaciones = [
    {
        "nombre": "Glorias",
        "categoria": ["Iniciación"],
        "ubicacion": {
            "latitud": 41.4036,
            "longitud": 2.1923
        }
    },
    {
        "nombre": "Paseo Colón",
        "categoria": ["Iniciación"],
        "ubicacion": {
            "latitud": 41.3784,
            "longitud": 2.1821
        }
    },
    {
        "nombre": "Rambla de Guipúscoa",
        "categoria": ["Iniciación"],
        "ubicacion": {
            "latitud": 41.4215,
            "longitud": 2.1937
        }
    },
    {
        "nombre": "Paseo Juan Borbón",
        "categoria": ["Iniciación"],
        "ubicacion": {
            "latitud": 41.3773,
            "longitud": 2.1897
        }
    },
    {
        "nombre": "Paseo del Río Besòs",
        "categoria": ["Iniciación"],
        "ubicacion": {
            "latitud": 41.4411,
            "longitud": 2.2270
        }
    },
    {
        "nombre": "Paseo Marítimo de Badalona",
        "categoria": ["Iniciación"],
        "ubicacion": {
            "latitud": 41.4497,
            "longitud": 2.2472
        }
    },
  {
    "nombre": "Hotel Vela (W)",
    "categoria": ["Intermedio"],
    "ubicacion": { "latitud": 41.3687, "longitud": 2.1905 }
  },
  {
    "nombre": "El Fórum",
    "categoria": ["Intermedio"],
    "ubicacion": { "latitud": 41.4090, "longitud": 2.2211 }
  },
  {
    "nombre": "Campus UPC Forum",
    "categoria": ["Intermedio"],
    "ubicacion": { "latitud": 41.3894, "longitud": 2.1135 }
  },
  {
    "nombre": "Mini Bowl del Forum",
    "categoria": ["Intermedio"],
    "ubicacion": { "latitud": 41.4095, "longitud": 2.2218 }
  },
  {
    "nombre": "Escaleras del Forum",
    "categoria": ["Intermedio"],
    "ubicacion": { "latitud": 41.4097, "longitud": 2.2221 }
  },
  {
    "nombre": "Montjuic",
    "categoria": ["Intermedio"],
    "ubicacion": { "latitud": 41.3643, "longitud": 2.1592 }
  },
  {
    "nombre": "Paseo de Zona Franca",
    "categoria": ["Intermedio"],
    "ubicacion": { "latitud": 41.3549, "longitud": 2.1360 }
  },
  {
    "nombre": "Wallride del Parque del Forum",
    "categoria": ["Avanzado"],
    "ubicacion": { "latitud": 41.4098, "longitud": 2.2230 }
  },
  {
    "nombre": "La Cera del Forum",
    "categoria": ["Avanzado"],
    "ubicacion": { "latitud": 41.4092, "longitud": 2.2215 }
  },
  {
    "nombre": "La Ola del Besòs - Skatepark Prim",
    "categoria": ["Avanzado"],
    "ubicacion": { "latitud": 41.4192, "longitud": 2.2188 }
  },
  {
    "nombre": "Mirador del Hotel Vela (W)",
    "categoria": ["Avanzado"],
    "ubicacion": { "latitud": 41.3685, "longitud": 2.1900 }
  },
  {
    "nombre": "Rampas de Glorias",
    "categoria": ["Avanzado"],
    "ubicacion": { "latitud": 41.4036, "longitud": 2.1913 }
  },
  {
    "nombre": "Cerillas de la Vall D'Hebron (Els Mistos)",
    "categoria": ["Avanzado"],
    "ubicacion": { "latitud": 41.4291, "longitud": 2.1454 }
  }

];

const subirUbicaciones = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB}/rollerbcn?retryWrites=true&w=majority`);
        console.log("✅ Conectado a MongoDB");

        for (const ubicacion of ubicaciones) {
            await ubicacionesController.create({ body: ubicacion }, { status: () => ({ json: console.log }) });
        }

        console.log("🚀 Ubicaciones insertadas correctamente");

    } catch (error) {
        console.error("❌ Error al subir ubicaciones:", error);
    } finally {
        await mongoose.disconnect();
        console.log("🔌 Conexión cerrada");
    }
};

subirUbicaciones();

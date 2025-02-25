import dbClient from "../config/dbClient.js";

class ubicacionesModel {
    async create() {
        const colUbicaciones = dbClient.db.collection('ubicaciones');
        await colUbicaciones.insertOne(ubicacion);
 
    }
}

export default new ubicacionesModel;
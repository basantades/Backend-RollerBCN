import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class ubicacionesModel {
    async create(ubicacion) {
        const colUbicaciones = dbClient.db.collection('ubicaciones');
        return await colUbicaciones.insertOne(ubicacion);
    }

    async update(id, ubicacion) {
        const colUbicaciones = dbClient.db.collection('ubicaciones');
        return await colUbicaciones.updateOne({ _id: new ObjectId(id) }, { $set: ubicacion });
    }

    async delete(id) {
        const colUbicaciones = dbClient.db.collection('ubicaciones');
        return await colUbicaciones.deleteOne({ _id: new ObjectId(id) });
    }

    async getAll() {
        const colUbicaciones = dbClient.db.collection('ubicaciones');
        return await colUbicaciones.find({}).toArray();
    }

    async getOne(id) {
        const colUbicaciones = dbClient.db.collection('ubicaciones');
        return await colUbicaciones.findOne({ _id: new ObjectId(id) });
    }
}

export default new ubicacionesModel;
// import dbClient from "../config/dbClient.js";
// import { ObjectId } from "mongodb";
import ubicacionesSchema from "../schemas/ubicaciones.js";

class ubicacionesModel {
    async create(ubicacion) {
        return await ubicacionesSchema.create(ubicacion);
    }

    async update(id, ubicacion) {
        return await ubicacionesSchema.findOneAndUpdate({ _id: id }, ubicacion, { new: true }); // el new: true es para devuelver el objeto despues de ser actualizado
    }

    async delete(id) {
        return await ubicacionesSchema.findOneAndDelete({ _id: id });
    }

    async getAll() {
        return await ubicacionesSchema.find({});
    }

    async getOne(id) {
        return await ubicacionesSchema.findOne({ _id: id });
    }
}

export default new ubicacionesModel;
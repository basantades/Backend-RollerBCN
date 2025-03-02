import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";

class eventsModel {
    async create(ubicacion) {
        const colEvents = dbClient.db.collection('events');
        return await colEvents.insertOne(ubicacion);
    }

    async update(id, ubicacion) {
        const colEvents = dbClient.db.collection('events');
        return await colEvents.updateOne({ _id: new ObjectId(id) }, { $set: ubicacion });
    }

    async delete(id) {
        const colEvents = dbClient.db.collection('events');
        return await colEvents.deleteOne({ _id: new ObjectId(id) });
    }

    async getAll() {
        const colEvents = dbClient.db.collection('events');
        return await colEvents.find({}).toArray();
    }

    async getOne(id) {
        const colEvents = dbClient.db.collection('events');
        return await colEvents.findOne({ _id: new ObjectId(id) });
    }
}

export default new eventsModel;
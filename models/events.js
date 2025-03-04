// import dbClient from "../config/dbClient.js";
// import { ObjectId } from "mongodb";
import eventsSchema from "../schemas/events.js";

class eventsModel {
    async create(event) {
        return await eventsSchema.create(event);
    }

    async update(id, event) {
        return await eventsSchema.findOneAndUpdate({ _id: id }, event, { new: true });
    }

    async delete(id) {
        return await eventsSchema.findOneAndDelete({ _id: id });
    }

    async getAll() {
        return await eventsSchema.find({});
    }

    async getOne(id) {
        return await eventsSchema.findOne({ _id: id });
    }
}

export default new eventsModel;
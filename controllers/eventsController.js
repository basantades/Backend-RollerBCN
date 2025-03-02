import eventsModel from "../models/events.js";

class eventsController {
    constructor() {
    }

    async create(req, res) {
        try {
            const data = await eventsModel.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({status: "error"});
        }
    }
    async update(req, res) {
        try {
            const id = req.params.id;
            const data = await eventsModel.update(id, req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({status: "error"});
        }
    }
    async delete(req, res) {
        try {
            const id = req.params.id;
            const data = await eventsModel.delete(id);
            res.status(206).json(data);
        } catch (error) {
            res.status(500).json({status: "error"});
        }
    }
    async getOne(req, res) {
        try {
            const id = req.params;
            const data = await eventsModel.getOne(id);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({status: "error"});
        }
    }
    async getAll(req, res) {
        try {
            const data = await eventsModel.getAll();
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({status: "error"});
        }
    }
}

export default new eventsController();
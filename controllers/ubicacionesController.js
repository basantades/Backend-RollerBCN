import ubicacionesModel from "../models/ubicaciones.js";

class ubicacionesController {
    constructor() {
    }

    async create(req, res) {
        try {
            const data = ubicacionesModel.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({status: "error"});
        }
    }
    async update(req, res) {
        try {
            res.status(201).json({status: "ok"});
        } catch (error) {
            res.status(500).json({status: "error"});
        }
    }
    async delete(req, res) {
        try {
            res.status(201).json({status: "ok"});
        } catch (error) {
            res.status(500).json({status: "error"});
        }
    }
    async getOne(req, res) {
        try {
            res.status(201).json({status: "ok"});
        } catch (error) {
            res.status(500).json({status: "error"});
        }
    }
    async getAll(req, res) {
        try {
            res.status(201).json({status: "ok"});
        } catch (error) {
            res.status(500).json({status: "error"});
        }
    }
}

export default new ubicacionesController();
import ubicacionesModel from "../models/ubicaciones.js";

class ubicacionesController {
    constructor() {
    }

    async create(req, res) {
        try {
            const data = await ubicacionesModel.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({status: "error al crear"});
        }
    }
    async update(req, res) {
        try {
            const id = req.params.id;
            const data = await ubicacionesModel.update(id, req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({status: "error"});
        }
    }
    async delete(req, res) {
        try {
            const id = req.params.id;
            const data = await ubicacionesModel.delete(id);
            res.status(206).json(data);
        } catch (error) {
            res.status(500).json({status: "error"});
        }
    }
    async getOne(req, res) {
        try {
            const id = req.params;
            const data = await ubicacionesModel.getOne(id);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({status: "error"});
        }
    }
    async getAll(req, res) {
        try {
            const data = await ubicacionesModel.getAll();
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({status: "error"});
        }
    }
    async createMany(ubicaciones) {
        try {
            const data = await ubicacionesModel.create(ubicaciones);
            console.log("🚀 Ubicaciones insertadas correctamente");
        } catch (error) {
            console.error("❌ Error al subir ubicaciones:", error);
        }
    }
}

export default new ubicacionesController();
class ubicacionesController {
    constructor() {
        // this.ubicaciones = [];
    }

    async create(req, res) {
        try {
            res.status(201).json({status: "ok"});
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
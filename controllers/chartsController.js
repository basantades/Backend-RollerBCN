import chartsModel from "../models/charts.js";

class ChartsController {
    constructor() {
    }

    async create(req, res) {
        try {
          const chart = await chartsModel.create(req.body);
          res.status(201).json(chart);
        } catch (error) {
          console.error("Error creating chart:", error);
          res.status(500).json({ message: "Error creating chart" });
        }
      }
    async update(req, res) {
        try {
          const chart = await chartsModel.update(req.params.id, req.body);
          if (!chart) {
            return res.status(404).json({ message: "Chart not found" });
          }
          res.status(200).json(chart);
        } catch (error) {
          console.error("Error updating chart:", error);
          res.status(500).json({ message: "Error updating chart" });
        }
      }
    async delete(req, res) {
        try {
          const chart = await chartsModel.delete(req.params.id);
          if (!chart) {
            return res.status(404).json({ message: "Chart not found" });
          }
          res.status(200).json({ message: "Chart deleted successfully" });
        } catch (error) {
          console.error("Error deleting chart:", error);
          res.status(500).json({ message: "Error deleting chart" });
        }
      }
    // async getOne(req, res) {
    //     try {
    //         const data = await chartsModel.getOne(req.params.id);
    //         res.status(201).json(data);
    //     } catch (error) {
    //         console.error("Error fetching chart:", error);
    //         res.status(500).json({ message: "Error fetching chart" });
    //     }
    // }
    async getAll(req, res) {
        try {
          const charts = await chartsModel.getAll();
          res.status(200).json(charts);
        } catch (error) {
          console.error("Error fetching charts:", error);
          res.status(500).json({ message: "Error fetching charts" });
        }
      }

      async getByName(req, res) {
        try {
          const chart = await chartsModel.getByName(req.params.name);
          if (!chart) {
            return res.status(404).json({ message: "Chart not found" });
          }
          res.status(200).json(chart);
        } catch (error) {
          console.error("Error fetching chart:", error);
          res.status(500).json({ message: "Error fetching chart" });
        }
      }
}

export default new ChartsController();
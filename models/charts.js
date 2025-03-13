import chartsSchema from "../schemas/charts.js";

class ChartsModel {
  async create(chart) {
    return await chartsSchema.create(chart);
  }

  async update(id, chart) {
    return await chartsSchema.findOneAndUpdate({ _id: id }, chart, { new: true }); // Devuelve el objeto actualizado
  }

  async delete(id) {
    return await chartsSchema.findOneAndDelete({ _id: id });
  }

  async getAll() {
    return await chartsSchema.find({});
  }

  async getOne(id) {
    return await chartsSchema.findOne({ _id: id });
  }

  // Método adicional para buscar por nombre (útil para el frontend)
  async getByName(name) {
    return await chartsSchema.findOne({ name });
  }
}

export default new ChartsModel;
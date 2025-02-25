import express from 'express';
import ubicacionController from '../controllers/ubicacionesController.js';
const route = express.Router();

route.post('/', ubicacionController.create);
route.get('/:id', ubicacionController.getOne);  
route.get('/', ubicacionController.getAll);  
route.put('/:id', ubicacionController.update);
route.delete('/:id', ubicacionController.delete);

export default route;
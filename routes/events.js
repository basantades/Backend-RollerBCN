import express from 'express';
import eventsController from '../controllers/eventsController.js';
const route = express.Router();

route.post('/', eventsController.create);
route.get('/:id', eventsController.getOne);  
route.get('/', eventsController.getAll);  
route.put('/:id', eventsController.update);
route.delete('/:id', eventsController.delete);

export default route;
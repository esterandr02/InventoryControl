import { Router } from 'express';

const routes = Router();

import ItemController from './controllers/ItemController';

const itemController = new ItemController();

routes.post('/inventory', itemController.create);
routes.get('/inventory', itemController.list);
routes.put('/inventory/:id', itemController.update);
routes.delete('/inventory/:id', itemController.remove);

export default routes;

import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';

const routes = Router();

import ItemController from './controllers/ItemController';

const itemController = new ItemController();

routes.post(
    '/inventory',
    celebrate({
        [Segments.BODY]: {
            item: Joi.string(),
            quantity: Joi.number().min(0).integer(),
            value: Joi.number().min(0),
        },
    }),
    itemController.create
);

routes.get('/inventory', itemController.list);

routes.put(
    '/inventory/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
        [Segments.BODY]: {
            item: Joi.string(),
            quantity: Joi.number().min(0).integer(),
            value: Joi.number().min(0),
        },
    }),
    itemController.update
);

routes.delete(
    '/inventory/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    itemController.remove
);

export default routes;

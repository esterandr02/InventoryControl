import { container } from 'tsyringe';

import { Request, Response } from 'express';

import ListItemsService from '../services/ListItemsService';
import AddItemService from '../services/AddItemService';
import UpdateItemService from '../services/UpdateItemService';
import RemoveItemService from '../services/RemoveItemService';

export default class AddItemController {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { item, quantity, value } = request.body;

            const addItemService = container.resolve(AddItemService);

            const newItem = await addItemService.execute({
                item,
                quantity,
                value,
            });

            return response.json(newItem);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }

    public async list(request: Request, response: Response): Promise<Response> {
        try {
            const listItems = container.resolve(ListItemsService);

            const allItems = await listItems.execute();

            return response.json(allItems);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }

    public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { id } = request.params;
            const { item, quantity, value } = request.body;

            const updateItem = container.resolve(UpdateItemService);

            const updated = await updateItem.execute({
                id,
                item,
                quantity,
                value,
            });

            return response.json(updated);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }

    public async remove(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { id } = request.params;

            const removeItem = container.resolve(RemoveItemService);

            await removeItem.execute(id);

            return response.status(200).json();
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}

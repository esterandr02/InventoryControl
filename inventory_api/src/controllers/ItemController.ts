import { Request, Response } from 'express';

import AddItemService from '../services/AddItemService';

export default class AddItemController {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { item, quantity, value } = request.body;

            const addItemService = new AddItemService();

            const newItem = addItemService.execute({ item, quantity, value });

            return response.json(newItem);
        } catch (err) {
            return response.json({ error: err.message });
        }
    }

    public async list(request: Request, response: Response): Promise<Response> {
        try {
            const items: void[] = [];

            return response.json(items);
        } catch (err) {
            return response.json({ error: err.message });
        }
    }

    public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { item_id } = request.params;

            return response.json(item_id);
        } catch (err) {
            return response.json({ error: err.message });
        }
    }

    public async remove(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { item_id } = request.params;

            return response.json(item_id);
        } catch (err) {
            return response.json({ error: err.message });
        }
    }
}

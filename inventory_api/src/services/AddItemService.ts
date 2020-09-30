import { inject, injectable } from 'tsyringe';

import Request from '../dto/Request';
import ItemRepositoryDTO from '../dto/repositories/ItemRepositoryDTO';

import Item from '../entities/Item';

import NewError from '../errors/NewError';

@injectable()
export default class AddItemService {
    constructor(
        @inject('ItemRepository')
        private itemRepository: ItemRepositoryDTO
    ) {}

    public async execute({ item, quantity, value }: Request): Promise<Item> {
        const isItemExists = await this.itemRepository.findByName(item);

        if (isItemExists) {
            throw new NewError(
                'This item already exists. If you want to update it go to Update route',
                400
            );
        }

        return this.itemRepository.create({
            item,
            quantity,
            value,
        });
    }
}

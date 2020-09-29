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
        const isItemExists = await this.itemRepository.checkItemExists(item);

        if (!isItemExists) {
            if (quantity < 0) {
                throw new NewError(
                    'Cannot add a new item with negative quantity',
                    400
                );
            }

            return this.itemRepository.create({
                item,
                quantity,
                value,
            });
        }

        if (isItemExists.quantity === 0 && quantity < 0) {
            throw new NewError('Cannot reduce quantity of 0', 400);
        }

        isItemExists.quantity += quantity;

        return this.itemRepository.save(isItemExists);
    }
}

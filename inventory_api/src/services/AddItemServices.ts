import { inject, injectable } from 'tsyringe';

import Request from '../dto/Request';
import ItemRepositoryDTO from '../dto/repositories/ItemRepositoryDTO';

import Item from '../entities/Item';

@injectable()
export default class AddItemService {
    constructor(
        @inject('ItemRepository')
        private itemRepository: ItemRepositoryDTO
    ) {}

    public async execute({ item, quantity, value }: Request): Promise<Item> {
        const isItemExists = await this.itemRepository.checkItemExists(item);

        if (!isItemExists) {
            return this.itemRepository.create({
                item,
                quantity,
                value,
            });
        }

        return isItemExists;
    }
}

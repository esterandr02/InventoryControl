import { inject, injectable } from 'tsyringe';

import ItemRepositoryDTO from '../dto/repositories/ItemRepositoryDTO';

import Item from '../entities/Item';

import NewError from '../errors/NewError';

interface UpdateRequest {
    id: string;
    item: string;
    quantity: number;
    value: number;
}

@injectable()
export default class UpdateItemService {
    constructor(
        @inject('ItemRepository')
        private itemRepository: ItemRepositoryDTO
    ) {}

    public async execute({
        id,
        item,
        quantity,
        value,
    }: UpdateRequest): Promise<Item> {
        const findItem = await this.itemRepository.findById(id);

        if (!findItem) {
            throw new NewError('Item not found. Check item id', 404);
        }

        if (item) {
            findItem.item = item;
        }

        if (quantity) {
            findItem.quantity = quantity;
        }

        if (value) {
            findItem.value = value;
        }

        await this.itemRepository.save(findItem);

        return findItem;
    }
}

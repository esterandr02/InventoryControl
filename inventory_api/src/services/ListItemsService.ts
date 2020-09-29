import { inject, injectable } from 'tsyringe';

import ItemRepositoryDTO from '../dto/repositories/ItemRepositoryDTO';

import Item from '../entities/Item';

@injectable()
export default class AddItemService {
    constructor(
        @inject('ItemRepository')
        private itemRepository: ItemRepositoryDTO
    ) {}

    public async execute(): Promise<Item[]> {
        return this.itemRepository.findAll();
    }
}

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

    public async execute(): Promise<Item[]> {
        return this.itemRepository.findAll();
    }
}

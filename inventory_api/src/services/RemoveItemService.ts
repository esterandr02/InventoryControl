import { inject, injectable } from 'tsyringe';

import ItemRepositoryDTO from '../dto/repositories/ItemRepositoryDTO';

import NewError from '../errors/NewError';

@injectable()
export default class RemoveItemService {
    constructor(
        @inject('ItemRepository')
        private itemRepository: ItemRepositoryDTO
    ) {}

    public async execute(id: string): Promise<void> {
        const findItem = await this.itemRepository.findById(id);

        if (!findItem) {
            throw new NewError('Item not found. Check item id', 404);
        }

        await this.itemRepository.remove(id);
    }
}

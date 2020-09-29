import { inject, injectable } from 'tsyringe';

import ItemRepositoryDTO from '../dto/repositories/ItemRepositoryDTO';

@injectable()
export default class RemoveItemService {
    constructor(
        @inject('ItemRepository')
        private itemRepository: ItemRepositoryDTO
    ) {}

    public async execute(id: string): Promise<void> {
        await this.itemRepository.remove(id);
    }
}

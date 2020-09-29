import { getRepository, Repository } from 'typeorm';

import Item from '../entities/Item';

import ItemRepositoryDTO from '../dto/repositories/ItemRepositoryDTO';
import Request from '../dto/Request';

export default class ItemRepository implements ItemRepositoryDTO {
    private ormRepository: Repository<Item>;

    constructor() {
        this.ormRepository = getRepository(Item);
    }

    public async create({ item, quantity, value }: Request): Promise<Item> {
        const newItem = this.ormRepository.create({ item, quantity, value });

        await this.ormRepository.save(newItem);

        return newItem;
    }

    public async list(): Promise<Item[]> {}

    public async update({ item, quantity, value }: Request): Promise<Item> {}

    public async remove(): Promise<void> {}

    public async save(item: Item): Promise<Item> {
        return this.ormRepository.save(item);
    }

    public async checkItemExists(item: string): Promise<Item | undefined> {
        return this.ormRepository.findOne({
            where: { item },
        });
    }
}

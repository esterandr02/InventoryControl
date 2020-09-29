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

    public async remove(id: string): Promise<void> {
        await this.ormRepository.delete(id);
    }

    public async save(item: Item): Promise<Item> {
        return this.ormRepository.save(item);
    }

    public async findAll(): Promise<Item[]> {
        return this.ormRepository.find();
    }

    public async findByName(item: string): Promise<Item | undefined> {
        return this.ormRepository.findOne({
            where: { item },
        });
    }

    public async findById(id: string): Promise<Item | undefined> {
        return this.ormRepository.findOne({
            where: { id },
        });
    }
}

import { uuid } from 'uuidv4';

import Item from '../../entities/Item';

import ItemRepositoryDTO from '../../dto/repositories/ItemRepositoryDTO';
import Request from '../../dto/Request';

export default class FakeItemRepository implements ItemRepositoryDTO {
    private items: Item[] = [];

    public async create({ item, quantity, value }: Request): Promise<Item> {
        const newItem = new Item();

        Object.assign(newItem, { id: uuid(), item, quantity, value });

        this.items.push(newItem);

        return newItem;
    }

    public async remove(id: string): Promise<void> {
        this.items.filter(findItem => findItem.id !== id);
    }

    public async save(item: Item): Promise<Item> {
        this.items.push(item);

        return item;
    }

    public async findAll(): Promise<Item[]> {
        return this.items;
    }

    public async findByName(item: string): Promise<Item | undefined> {
        return this.items.find(findItem => findItem.item === item);
    }

    public async findById(id: string): Promise<Item | undefined> {
        return this.items.find(findItem => findItem.id === id);
    }
}

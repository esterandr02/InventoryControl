import Request from 'dto/Request';
import Item from '../../entities/Item';

export default interface ItemRepositoryDTO {
    create({ item, quantity, value }: Request): Promise<Item>;

    update({ item, quantity, value }: Request): Promise<Item>;

    remove(): Promise<void>;

    save(item: Item): Promise<Item>;

    findAll(): Promise<Item[]>;

    findByName(item_name: string): Promise<Item | undefined>;

    findById(id: string): Promise<Item | undefined>;
}

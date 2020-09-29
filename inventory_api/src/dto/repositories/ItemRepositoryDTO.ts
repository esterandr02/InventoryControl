import Request from 'dto/Request';
import Item from '../../entities/Item';

export default interface ItemRepositoryDTO {
    create({ item, quantity, value }: Request): Promise<Item>;

    list(): Promise<Item[]>;

    update({ item, quantity, value }: Request): Promise<Item>;

    remove(): Promise<void>;

    save(item: Item): Promise<Item>;

    checkItemExists(item_name: string): Promise<Item | undefined>;
}

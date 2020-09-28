import { getRepository, Repository } from 'typeorm';

//import Item from '../entities/Item';

//import ItemRepositoryDTO from '../dto/repositories/ItemRepositoryDTO';
import Request from '../dto/Request';

export default class ItemRepository implements ItemRepositoryDTO {
    //private ormRepository: Repository<Item>;

    constructor() {}

    public async create({ item, quantity, value }: Request): Promise<void> {}

    public async list(): Promise<void> {}

    public async update(): Promise<void> {}

    public async remove(): Promise<void> {}
}

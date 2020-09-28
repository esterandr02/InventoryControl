import { container } from 'tsyringe';

import ItemRepository from './repository/ItemRepository';
import ItemRepositoryDTO from './dto/repositories/ItemRepositoryDTO';

container.registerSingleton<ItemRepositoryDTO>(
    'ItemRepository',
    ItemRepository
);

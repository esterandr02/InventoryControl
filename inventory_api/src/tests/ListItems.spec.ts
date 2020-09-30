import FakeItemRepository from '../repository/fake/FakeItemRepository';

import ListItemService from '../services/ListItemsService';

let fakeItemRepository: FakeItemRepository;
let listItemService: ListItemService;

describe('ListItemService', () => {
    beforeEach(() => {
        fakeItemRepository = new FakeItemRepository();
        listItemService = new ListItemService(fakeItemRepository);
    });

    it('It should be able to list all Items existing', async () => {
        const item1 = await fakeItemRepository.create({
            item: 'iphone 8',
            quantity: 30,
            value: 3150,
        });

        const item2 = await fakeItemRepository.create({
            item: 'motog 8 power',
            quantity: 50,
            value: 1540,
        });

        const item3 = await fakeItemRepository.create({
            item: 'iphone xr',
            quantity: 70,
            value: 3400,
        });

        const allItems = await listItemService.execute();

        expect(allItems).toEqual(expect.arrayContaining([item1, item2, item3]));
    });
});

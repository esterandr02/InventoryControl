import FakeItemRepository from '../repository/fake/FakeItemRepository';

import AddItemService from '../services/AddItemService';

import NewError from '../errors/NewError';

let fakeItemRepository: FakeItemRepository;
let addItemService: AddItemService;

describe('AddItemService', () => {
    beforeEach(() => {
        fakeItemRepository = new FakeItemRepository();
        addItemService = new AddItemService(fakeItemRepository);
    });

    it('It should be able to create a new Item', async () => {
        const item = await addItemService.execute({
            item: 'cell-phone',
            quantity: 10,
            value: 1540,
        });

        expect(item).toHaveProperty('id');
    });

    it('It not should be able to create two same Items', async () => {
        await addItemService.execute({
            item: 'iphone 8 rose',
            quantity: 10,
            value: 1540,
        });

        await expect(
            addItemService.execute({
                item: 'iphone 8 rose',
                quantity: 5,
                value: 1540,
            })
        ).rejects.toBeInstanceOf(NewError);
    });
});

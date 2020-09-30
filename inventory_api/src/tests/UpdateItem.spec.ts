import FakeItemRepository from '../repository/fake/FakeItemRepository';

import UpdateItemService from '../services/UpdateItemService';
import NewError from '../errors/NewError';

let fakeItemRepository: FakeItemRepository;
let updateItemService: UpdateItemService;

describe('UpdateItemService', () => {
    beforeEach(() => {
        fakeItemRepository = new FakeItemRepository();
        updateItemService = new UpdateItemService(fakeItemRepository);
    });

    it('It should be able to update a especific item by id', async () => {
        const newItem = await fakeItemRepository.create({
            item: 'iphone 8',
            quantity: 30,
            value: 3150,
        });

        const updatedItem = await updateItemService.execute({
            id: newItem.id,
            item: 'iphone 8',
            quantity: 10,
            value: 3000,
        });

        expect(updatedItem).toEqual({
            id: newItem.id,
            item: 'iphone 8',
            quantity: 10,
            value: 3000,
        });
    });

    it('It should not be able to update a non-existing item by id', async () => {
        await expect(
            updateItemService.execute({
                id: 'non-existing-id',
                item: 'iphone 8',
                quantity: 10,
                value: 3000,
            })
        ).rejects.toBeInstanceOf(NewError);
    });
});

import FakeItemRepository from '../repository/fake/FakeItemRepository';

import RemoveItemService from '../services/RemoveItemService';
import NewError from '../errors/NewError';

let fakeItemRepository: FakeItemRepository;
let removeItemService: RemoveItemService;

describe('RemoveItemService', () => {
    beforeEach(() => {
        fakeItemRepository = new FakeItemRepository();
        removeItemService = new RemoveItemService(fakeItemRepository);
    });

    it('It should be able to Remove a especific item by id', async () => {
        const testRemove = jest.spyOn(fakeItemRepository, 'remove');

        const item1 = await fakeItemRepository.create({
            item: 'iphone 8',
            quantity: 30,
            value: 3150,
        });

        await fakeItemRepository.create({
            item: 'motog 8 power',
            quantity: 50,
            value: 1540,
        });

        await removeItemService.execute(item1.id);

        expect(testRemove).toHaveBeenCalled();
    });

    it('It should not be able to Remove a non-existing item by id', async () => {
        await expect(
            removeItemService.execute('non-existing-id')
        ).rejects.toBeInstanceOf(NewError);
    });
});

//import { inject, injectable } from 'tsyringe';

import Request from '../dto/Request';

//@injectable()
export default class AddItemService {
    constructor() {}

    public async execute({ item, quantity, value }: Request): Promise<Object> {
        return { item, quantity, value };
    }
}

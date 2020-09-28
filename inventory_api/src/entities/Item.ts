import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('items')
export default class Item {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    item: string;

    @Column()
    quantity: number;

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

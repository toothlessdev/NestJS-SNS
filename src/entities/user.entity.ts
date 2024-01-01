import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
    })
    firstName: string;

    @Column({
        type: "varchar",
    })
    lastName: string;
}

import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserModel } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(UserModel)
        private readonly userRepository: Repository<UserModel>,
    ) {}
}

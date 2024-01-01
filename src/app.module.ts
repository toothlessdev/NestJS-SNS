import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModel } from "./entities/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserModel]),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "127.0.0.1",
            port: 5432,
            username: "postgres",
            password: "postgres",
            database: "typeorm",
            entities: [UserModel],
            synchronize: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

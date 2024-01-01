import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostsModule } from "./posts/posts.module";

import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: "postgres", // 데이터베이스 타입
      host: "127.0.0.1",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "postgres",
      entities: [], // 생성할 db 모델이 들어감
      synchronize: true,
      // nestjs typeorm 코드와 db 동기화 (개발환경에서는 true, production 시 false)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

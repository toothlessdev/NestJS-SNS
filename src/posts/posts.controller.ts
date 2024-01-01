import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from "@nestjs/common";
import { PostsService } from "./posts.service";
// nest g resource : 원하는 이름의 모듈 생성가능

interface PostModel {
    id: number;
    author: string;
    title: string;
    content: string;
    likeCount: number;
    commentCount: number;
}

let posts: PostModel[] = [
    {
        id: 1,
        author: "author1",
        title: "title1",
        content: "content1",
        likeCount: 10,
        commentCount: 10,
    },
    {
        id: 2,
        author: "author2",
        title: "title2",
        content: "content2",
        likeCount: 10,
        commentCount: 10,
    },
    {
        id: 3,
        author: "author3",
        title: "title3",
        content: "content3",
        likeCount: 10,
        commentCount: 10,
    },
];

@Controller("posts")
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    public readAllPosts() {
        return this.postsService.readAllPosts();
    }

    @Get(":id")
    public readPostById(@Param("id") id: string) {
        return this.postsService.readPostById(Number(id));
    }

    @Post()
    public createPost(
        @Body("author") author: string,
        @Body("title") title: string,
        @Body("content") content: string,
    ) {
        return this.postsService.createPost(author, title, content);
    }

    @Put()
    public updatePost(
        @Body("id") id: number,
        @Body("author") author: string,
        @Body("title") title: string,
        @Body("content") content: string,
        @Body("likeCount") likeCount: number,
        @Body("commentCount") commentCount: number,
    ) {
        return this.postsService.updatePost(
            id,
            author,
            title,
            content,
            likeCount,
            commentCount,
        );
    }

    @Delete(":id")
    public deletePost(@Param("id") id: number) {
        return this.postsService.deletePost(id);
    }
}

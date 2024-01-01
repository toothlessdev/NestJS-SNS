import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { PostsModel } from "./entities/posts.entities";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(PostsModel)
        private readonly postsRepository: Repository<PostsModel>,
    ) {}

    public async readAllPosts() {
        return this.postsRepository.find();
    }

    public async readPostById(id: number) {
        const post = await this.postsRepository.findOne({ where: { id: id } });
        if (!post) throw new NotFoundException();
        return post;
    }

    public async createPost(author: string, title: string, content: string) {
        const newPost = await this.postsRepository.create({
            author: author,
            title: title,
            content: content,
            likeCount: 0,
            commentCount: 0,
        });
        return await this.postsRepository.save(newPost);
    }

    public async updatePost(
        id: number,
        author: string,
        title: string,
        content: string,
        likeCount: number,
        commentCount: number,
    ) {
        const post = await this.postsRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!post) throw new NotFoundException();

        post.author = author;
        post.title = title;
        post.content = content;
        post.likeCount = likeCount;
        post.commentCount = commentCount;

        return await this.postsRepository.save(post);
    }

    public async deletePost(id: number) {
        const post = await this.postsRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!post) throw new NotFoundException();

        await this.postsRepository.delete(id);
        return id;
    }
}

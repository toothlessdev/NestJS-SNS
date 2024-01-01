import {
  Body,
  Controller,
  Get,
  Post,
  NotFoundException,
  Param,
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

  /**
   * GET /posts
   * 모든 post 를 가져온다
   */
  @Get()
  public getPosts() {
    return posts;
  }

  /**
   * GET /posts/:id
   * id 에 해당하는 post 를 가져온다
   */
  @Get("/:id")
  public getPost(@Param("id") id: string) {
    const post = posts.find((post) => post.id === parseInt(id));
    if (!post) throw new NotFoundException();
    return post;
  }

  /**
   * POST /posts
   * post 를 생성
   */
  @Post()
  public postPost(
    @Body("author") author: string,
    @Body("title") title: string,
    @Body("content") content: string,
  ) {
    const post = {
      id: posts[posts.length - 1].id + 1,
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    };

    posts = [...posts, post];
    return post;
  }

  /**
   * PUT /posts/:id
   * id 에 해당하는 post 변경
   */

  /**
   * DELETE /posts/:id
   * id 에 해당하는 post 삭제
   */
}

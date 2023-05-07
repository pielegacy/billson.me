import { Handlers, PageProps } from "$fresh/server.ts";
import TemplatedTitle from "../../components/TemplatedTitle.tsx";
import { BlogPostSummary } from "../../types/blog.ts";
import { getPosts } from "../../utils/notion.ts";

interface BlogProps {
  posts: BlogPostSummary[];
}

export const handler: Handlers<BlogProps> = {
  async GET(_, ctx) {
    return ctx.render({
      posts: (await getPosts()).map((post) => ({
        id: post.id,
        title: post.properties.Name.title[0].text.content,
      })),
    });
  },
};

export default function Blog({ data: { posts } }: PageProps<BlogProps>) {
  return (
    <section>
      <TemplatedTitle title="Blog" />
      {posts.map((post) => <BlogTitle key={post.id} post={post} />)}
    </section>
  );
}

interface BlogTitleProps {
  post: BlogPostSummary;
}

function BlogTitle({ post }: BlogTitleProps) {
  return (
    <a href={`/blog/posts/${post.id}#${encodeURIComponent(post.title)}`}>
      <h2>
        {post.title}
      </h2>
    </a>
  );
}

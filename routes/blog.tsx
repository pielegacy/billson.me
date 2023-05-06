import { Handlers, PageProps } from "$fresh/server.ts";
import TemplatedTitle from "../components/TemplatedTitle.tsx";
import { BlogPostSummary } from "../modules/blog/types.ts";
import { getPosts } from "../modules/notion/utils.ts";

interface BlogProps {
  posts: BlogPostSummary[];
}

export const handler: Handlers<BlogProps> = {
  async GET(_, ctx) {
    return ctx.render({
      posts: (await getPosts()).map((post) => ({
        title: post.properties.Name.title[0].text.content,
      })),
    });
  },
};

export default function Blog({ data: { posts } }: PageProps<BlogProps>) {
  return (
    <section>
      <TemplatedTitle title="Blog" />
      {posts.map((post) => <BlogTitle post={post} />)}
    </section>
  );
}

interface BlogTitleProps {
  post: BlogPostSummary;
}

function BlogTitle({ post }: BlogTitleProps) {
  return <h2>{post.title}</h2>;
}

import { Handlers, PageProps } from "$fresh/server.ts";
import TemplatedTitle from "../../../components/TemplatedTitle.tsx";
import BlogPostRenderer from "../../../components/blog/BlogPostRenderer.tsx";
import { BlogPost } from "../../../types/blog.ts";
import { mapBlogContents } from "../../../utils/blog.ts";
import { getPost, getPostBlocks } from "../../../utils/notion.ts";

export const handler: Handlers<BlogPostRouteProps> = {
  async GET(req, ctx) {
    const postId = getPostId(ctx.params);
    const post = await getPost(postId);
    const blocks = await getPostBlocks(postId);

    return await ctx.render({
      // Todo: create builder
      post: {
        id: postId,
        title: post.properties.Name.title[0].text.content,
        paragraphs: mapBlogContents(blocks),
      },
    });
  },
};

interface BlogPostRouteProps {
  post: BlogPost;
}

export default function BlogPostRoute(
  { data }: PageProps<BlogPostRouteProps>,
) {
  return (
    <section>
      <TemplatedTitle title={data.post.title} />
      <BlogPostRenderer post={data.post} />
    </section>
  );
}

function getPostId(params: Record<string, string>): string {
  const postId = params.postId;
  if (!postId) {
    throw new Error("No param of `postId` provided to route");
  }

  return postId;
}

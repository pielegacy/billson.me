import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.5/server.ts";
import TemplatedTitle from "../../../components/TemplatedTitle.tsx";
import { getPost, getPostBlocks } from "../../../modules/notion/utils.ts";
import { BlogPost } from "../../../modules/blog/types.ts";

export const handler: Handlers<BlogPostRouteProps> = {
  async GET(req, ctx) {
    const postId = getPostId(ctx.params);
    const post = await getPost(postId);
    const blocks = await getPostBlocks(postId);
    console.log(blocks);

    return await ctx.render({
      post: {
        id: postId,
        title: post.properties.Name.title[0].text.content,
        contents: [
          blocks[0].paragraph.rich_text[0].text.content,
        ],
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
      <h1>{data.post.title}</h1>
      {data.post.contents.map((block) => <p>{block}</p>)}
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

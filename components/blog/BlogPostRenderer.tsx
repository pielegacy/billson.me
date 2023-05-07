import {
  BlogPostBlockResult,
  BlogPostPageResult,
} from "../../modules/notion/types.ts";

interface BlogPostRendererProps {
  post: BlogPostPageResult;
  blocks: BlogPostBlockResult[];
}

export default function BlogPostRenderer(
  { post, blocks }: BlogPostRendererProps,
) {
  return (
    <section>
      <h1>{post.properties.Name.title[0].text.content}</h1>
    </section>
  );
}

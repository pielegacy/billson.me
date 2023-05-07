import { BlogPost, BlogPostParagraph, isLinkPostChunk } from "../../types/blog.ts";

interface BlogPostRendererProps {
  post: BlogPost;
}

export default function BlogPostRenderer(
  { post }: BlogPostRendererProps,
) {
  console.log(post);
  return (
    <section>
      <h1>{post.title}</h1>
      {post.paragraphs.map((paragraph) => (
        <BlogPostParagraph paragraph={paragraph} />
      ))}
    </section>
  );
}

interface BlogPostParagraphProps {
  paragraph: BlogPostParagraph;
}

function BlogPostParagraph({ paragraph }: BlogPostParagraphProps) {
  return (
    <p>
      {paragraph.map((chunk) => {
        if (isLinkPostChunk(chunk)) {
          return <a href={chunk.link} target="_blank">{chunk.contents}</a>
        }
        return chunk.contents;
      })}
    </p>
  );
}

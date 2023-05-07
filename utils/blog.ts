import {
  BlogPostParagraph,
  LinkPostChunk,
  PostChunkBase,
  TextPostChunk,
} from "../types/blog.ts";
import { BlogPostBlockResult } from "../types/notion.ts";

export function mapBlogContents(
  blocks: BlogPostBlockResult[],
): BlogPostParagraph[] {
  return blocks.map((block) => {
    return block.paragraph.rich_text.map((block) => {
      if (block.text.link != null) {
        return {
          contents: block.text.content,
          link: block.text.link.url,
          type: "link",
        } as LinkPostChunk;
      }
      return {
        contents: block.text.content,
        type: "normal",
      } as TextPostChunk;
    });
  });
}

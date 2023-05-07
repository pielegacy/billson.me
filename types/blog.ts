import { satisfies } from "https://deno.land/std@0.178.0/semver/mod.ts";

export interface BlogPostSummary {
    id: string;
    title: string;
}

export type BlogPostBlockType = "normal" | "link";

export interface PostChunkBase {
    contents: string;
    type: BlogPostBlockType;
}

export interface TextPostChunk extends PostChunkBase {
    type: "normal";
}

export interface LinkPostChunk extends PostChunkBase {
    type: "link";
    link: string;
}

export const isLinkPostChunk = (chunk: PostChunkBase): chunk is LinkPostChunk => chunk.type === "link";

export type BlogPostParagraph = PostChunkBase[];

export interface BlogPost extends BlogPostSummary {
    paragraphs: BlogPostParagraph[];
}
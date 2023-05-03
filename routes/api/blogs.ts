import { HandlerContext, Handlers } from "$fresh/server.ts";
import { getPosts } from "../../common/utils/notion.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  const posts = await getPosts();
  return new Response(JSON.stringify(posts), {
    headers: {
        "Content-Type": "application/json"
    }
  });
};

import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts } from "../common/utils/notion.ts";
import * as log from "https://deno.land/std@0.151.0/log/mod.ts";

export const handlers: Handlers = {
  async GET(req, ctx) {
    const posts = await getPosts();
    log.info("Works");
    return ctx.render();
  },
};

export default function Blog() {
  return (
    <section>
      the blog zone
    </section>
  );
}

import { Handlers } from "$fresh/server.ts";
import TemplatedTitle from "../components/TemplatedTitle.tsx";

export const handlers: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },
};

export default function Home() {
  return (
    <>
      <TemplatedTitle title="Home" />
      
    </>
  );
}

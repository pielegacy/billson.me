import { Head } from "$fresh/runtime.ts";

export default function TemplatedTitle({ title }: { title: string }) {
  return (
    <Head>
      <title>{title} - Alex Billson</title>
    </Head>
  );
}

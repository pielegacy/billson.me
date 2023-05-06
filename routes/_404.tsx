import TemplatedTitle from "../components/TemplatedTitle.tsx";

export default function NoFoundPage() {
  return (
    <section className="text-center">
      <TemplatedTitle title="Page Not Found" />
      <h2>Not sure what you're looking for here...</h2>
    </section>
  );
}

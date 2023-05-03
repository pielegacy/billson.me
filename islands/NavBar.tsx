import { IS_BROWSER } from "https://deno.land/x/fresh@1.1.5/runtime.ts";

interface NavBarItemProps {
  text: string;
  link: string;
}
function NavBarItem({ text, link }: NavBarItemProps) {
  const active = IS_BROWSER && window.location.pathname === link;
  return <a className={active ? 'active' : ''} href={link}>{text}</a>;
}

const links: NavBarItemProps[] = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/blog",
    text: "Blog"
  }
];

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <h1 className="brand">billson.me</h1>
        <div className="tabs">
          {links.map((link) => <NavBarItem {...link} />)}
        </div>
      </div>
    </nav>
  );
}

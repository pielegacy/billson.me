interface NavBarItemProps {
  text: string;
  link: string;
}
function NavBarItem({ text, link }: NavBarItemProps) {
  return <a href={link}>{text}</a>;
}

const links: NavBarItemProps[] = [
  {
    link: "/",
    text: "Home",
  },
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

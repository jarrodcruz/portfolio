import Link from "next/link";
import { MyLinks } from "./linksBar";

const Header = () => {
  return (
    <section className="top-0 mb-8 ">
      <div className="absolute top-0 left-0 font-mono text-lg ">
        <Link href="/">Jarrod Cruz&apos;s Portfolio</Link>
      </div>
      <div className="absolute top-0 font-mono text-2xl right-0">
        <MyLinks />
      </div>
    </section>
  );
};

export default Header;

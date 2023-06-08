import Link from "next/link";
import { MyLinks } from "./linksBar";

const Header = () => {
  return (
    <section className="mb-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        <Link href="/">Jarrod Cruz's Portfolio</Link>
        <MyLinks />
      </div>
    </section>
  );
};

export default Header;

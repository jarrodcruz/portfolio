import Skills from "@/components/skills";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div>This is just empty for now, will add more later</div>
      <Link href="/about">About me</Link>
      <Skills/>
    </main>
  );
}

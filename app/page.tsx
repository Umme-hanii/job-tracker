import Image from "next/image";
import Logo from "../assets/logo.svg";
import landing from "../assets/main.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="logo"></Image>
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            Job <span className="text-primary">tracker</span>app
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            accusantium nulla aliquid, quidem quas nostrum ipsa recusandae
            tenetur suscipit optio soluta tempore natus illo nisi adipisci nam
            eveniet cupiditate molestias.
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job"> Get Started</Link>
          </Button>
        </div>
        <Image src={landing} alt="landing" className="hidden lg:block"></Image>
      </section>
    </main>
  );
}

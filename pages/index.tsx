import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold text-center">
        Welcome to{" "}
        <a className="text-blue-600" href="https://nextjs.org">
          Wedding
        </a>
      </h1>
    </main>
  );
}

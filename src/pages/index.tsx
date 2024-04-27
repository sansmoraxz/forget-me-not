import { Inter } from "next/font/google";
import Microphone from "@/components/microphone";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const appName = "Forget me not!";
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <title>{appName}</title>
      <h1 className="text-4xl font-bold">{appName}</h1>
      <Microphone />
    </main>
  );
}

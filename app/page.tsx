import Image from "next/image";

export default function Home() {
  return (
   <main className="relative">
    <div>
      <h1>Think Zone Technology</h1>
      <p>AI Solutions for a Smarter Future</p>
      <Image
        src="/thinkzone1.png"
        alt="Think Zone Technology"
        width={200}
        height={200}
      />
      </div>
   </main>
  );
}

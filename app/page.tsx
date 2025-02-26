import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";
import { FaAndroid, FaHome, FaPeopleArrows, FaPhone, FaProjectDiagram } from "react-icons/fa";


export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-5 px-10">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon:<FaHome/>},
        {name: 'About', link: '/about', icon:<FaPeopleArrows/>},
        {name: 'Projects', link: '/projects', icon: <FaProjectDiagram/>},
        {name: 'Contact', link: '/contact', icon: <FaPhone/>},
      ]}/>
      <Hero/>
     
      </div>
   </main>
  );
}

import Image from "next/image";
import NavBar from "@/components/Navbar"
import Header from "@/components/Header";

//logo color #7FFFD4

export default function Home() {
  return (
    <div className="bg-[#7fffd444] h-screen">
      <NavBar/>
      <Header/>
    </div>
  );
}

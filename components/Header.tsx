import Link from "next/link";
import Image from "next/image";
import profilePic from "../assets/image.me.jpg";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src={profilePic}
            width={40}
            height={40}
            alt="logo"
          />
        </Link>
        <h1>Michael Osas</h1>
      </div>
      <div className="">
        <Link
          href="https://michaelosas.netlify.app"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#38a0f9] flex items-center rounded-full text-center font-semibold"
        >
          Contact me for any web project
        </Link>
      </div>
    </header>
  );
}

export default Header;

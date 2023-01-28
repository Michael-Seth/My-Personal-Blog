import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";


function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className=" text-[#38a0f9] items-center flex">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#38a0f9] mr-2" />
          Go to Website
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#38a0f9]"><h1 className="font-bold text-white">
          This is a Navabar element for ads</h1>
          <Link
            href="https://michaelosas.netlify.app" className="text-[#38a0f9] font-bold ml-2"
          >
            www.michaelosas.netlify.app
          </Link></div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
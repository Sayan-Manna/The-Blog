import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="item-center flex text-[#f7ab0a]">
          <ArrowUturnLeftIcon className="mr-2 h-6 w-6"></ArrowUturnLeftIcon>
          Go to Website
        </Link>
        <div className="hidden md:flex p-3 rounded-lg justify-center border-2 border-[#f7ab0a]">
          <h1 className="font-bold text-white">Welcome!</h1>
        </div>
        {/* <Link href=""
        className="text-[#f7ab0a] font-bold ml-2">

        </Link> */}
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}
export default StudioNavbar;

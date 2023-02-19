import Image from "next/image";
import brandLogo from "../public/memoji2.png";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="object-cover bg-gradient-to-b from-[#333333] overflow-hidden rounded-full"
        width={44}
        height={44}
        src={brandLogo}
        alt="brand logo"
      ></Image>
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}
export default Logo;

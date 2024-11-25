import Link from "next/link";
import { useRouter } from "next/router";
import { HiEnvelope, HiHome, HiUser } from "react-icons/hi2";

const Nav = () => {
  const router = useRouter();
  const navData = [
    { name: "Home", path: "/", icon: <HiHome /> },
    { name: "About", path: "/about", icon: <HiUser /> },
    { name: "Contact", path: "/contact", icon: <HiEnvelope /> },
    // {
    //   name: "Commercial Property",
    //   path: "/commercial-property",
    //   icon: <HiHomeModern />,
    // },
    // {
    //   name: "Liquor Liability",
    //   path: "/liquor-liability",
    //   icon: <HiOutlineCubeTransparent />,
    // },
    // {
    //   name: "Builders Risk",
    //   path: "/builders-risk",
    //   icon: <HiMiniWrenchScrewdriver />,
    // },
  ];

  return (
    <nav className="hidden lg:flex flex-col xl:justify-center gap-y-4 fixed items-center h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.path}
              aria-label={link.name}
              className={`${
                link.path === router.route && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
            >
              <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
                <div className="bg-white relative flex text-black p-[6px] rounded-[3px">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div
                    className="border-solid border-l-white border-l-8 border-y-transparent 
                              border-y-[6px] border-r-0 absolute -right-2"
                  ></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;

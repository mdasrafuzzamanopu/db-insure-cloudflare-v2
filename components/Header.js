/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { STATE_IMAGES } from "../data/constants";

const headerMapRoutes = [
  "/",
  "/builders-risk",
  "/commercial-property",
  "/liquor-liability",
  "/location-test",
];

const Header = () => {
  const route = useRouter();
  const isMapRoute = headerMapRoutes.includes(route.pathname);
  const [stateName, setStateName] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.__STATE_NAME__) {
      setStateName(window.__STATE_NAME__);
    }
  }, []);

  return (
    <header className="absolute z-30 w-full flex items-center md:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-between py-6 md:items-center md:py-8 lg:flex-row gap-y-6">
          <div className="flex items-center space-x-4">
            <Link
              href={"/"}
              aria-label="home"
              className="w-[40px] md:w-[240px] "
            >
              <Image
                src={"/db-insure-logo.svg"}
                width={250}
                height={50}
                alt="logo"
                priority={true}
              />
            </Link>
            {isMapRoute && STATE_IMAGES[stateName] && (
              <div className="ml-4">
                <img
                  src={STATE_IMAGES[stateName]}
                  width={50}
                  height={50}
                  alt={stateName}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import clsx from "clsx";
import { headerData } from "data";
import Link from "next/link";
import { useEffect, useState } from "react";

import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  const { buttonText, LogoImgV1, LogoImgV2 } = headerData;

  const MenuIcon = navMobile ? HiX : HiMenu;

  useEffect(() => {
    const onScroll = () => {
      const showHeader = window.scrollY > 80;
      setHeader(showHeader);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <header
      className={clsx(
        { "rounded-md bg-white p-3 drop-shadow-primary": header },
        { "py-10": !header },
        "fixed left-0 right-0  z-20 mx-auto w-full max-w-[90vw] lg:max-w-[1120px]",
        "flex items-center justify-between",
        "transition-all duration-500"
      )}
    >
      <Link href={"/"}>
        <a>
          {header ? (
            <LogoImgV2 className="w-[160px]" />
          ) : (
            <LogoImgV1 className="w-[212px]" />
          )}
        </a>
      </Link>
      <div className="hidden gap-x-[96px] lg:flex">
        <nav>nav</nav>
        <button className="button">{buttonText}</button>
      </div>

      <div
        onClick={() => setNavMobile(!navMobile)}
        className="cursor-pointer transition-all lg:hidden"
      >
        <MenuIcon className="text-4xl text-accent-hover" />
      </div>
    </header>
  );
};

export default Header;

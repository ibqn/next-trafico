import { headerData } from "data"
import Link from "next/link"
import { useEffect, useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { classNames } from "util/class-names"
import { Nav } from "components/nav"
import { NavMobile } from "components/nav-mobile"
import LogoImageV1 from "./logoV1.svg"
import LogoImageV2 from "./logoV2.svg"

export const Header = () => {
  const [header, setHeader] = useState(false)
  const [navMobile, setNavMobile] = useState(false)
  const { buttonText } = headerData

  const MenuIcon = navMobile ? HiX : HiMenu

  useEffect(() => {
    const onScroll = () => {
      const showHeader = window.scrollY > 80
      setHeader(showHeader)
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  })

  return (
    <header
      className={classNames(
        header ? "rounded-md bg-white p-3 drop-shadow-primary" : "py-10",
        "fixed left-0 right-0 z-20 mx-auto w-full max-w-[90vw] lg:max-w-[1120px]",
        "flex items-center justify-between",
        "transition-all duration-500"
      )}
    >
      <Link href={"/"}>
        {header ? (
          <LogoImageV2 className="w-[160px]" />
        ) : (
          <LogoImageV1 className="w-[212px]" />
        )}
      </Link>
      <div className="hidden gap-x-[96px] lg:flex">
        <Nav header={header} />
        <button className="button">{buttonText}</button>
      </div>

      <button
        onClick={() => setNavMobile(!navMobile)}
        className="z-30 cursor-pointer transition-all lg:hidden"
      >
        <MenuIcon className="text-4xl text-accent-hover" />
      </button>
      <NavMobile navMobile={navMobile} />
    </header>
  )
}

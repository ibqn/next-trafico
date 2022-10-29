import { classNames } from "util/class-names"
import { navData } from "data"
import Link from "next/link"

export const NavMobile = ({ navMobile }) => {
  return (
    <nav
      className={classNames(
        navMobile ? "translate-y-0" : "-translate-y-[400px]",
        "absolute left-0 top-full w-full bg-accent p-10",
        "transition-transform duration-500",
        "flex justify-center rounded-md"
      )}
    >
      <ul className="flex flex-col gap-y-6">
        {navData.map((item, index) => {
          const { name, href } = item
          return (
            <li key={index}>
              <Link href={href}>
                <a className="text-white hover:text-accent-hover">{name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

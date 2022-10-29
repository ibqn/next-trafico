import { classNames } from "util/class-names"
import { navData } from "data"
import Link from "next/link"

export const Nav = ({ header }) => {
  return (
    <nav className="flex items-center">
      <ul className="flex flex-row gap-x-[96px]">
        {navData.map((item, index) => {
          const { name, href } = item
          return (
            <li key={index}>
              <Link href={href}>
                <a
                  className={classNames(
                    header ? "text-primary" : "text-white",
                    "font-semibold transition hover:text-accent-hover"
                  )}
                >
                  {name}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

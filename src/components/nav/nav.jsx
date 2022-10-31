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
              <Link
                className={classNames(
                  header ? "text-primary" : "text-white",
                  "font-semibold transition hover:text-accent-hover"
                )}
                href={href}
              >
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

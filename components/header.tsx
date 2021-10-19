// import Image from 'next/image'
import cn from 'classnames'
import Link from './link'

const menus = [
  {
    title: 'Resume',
    href: '/resume',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

const Header = () => {
  return (
    <header className="flex items-center px-10 py-5">
      {/* <Image width={185} height={35} src="/assets/logo.png" alt="logo" /> */}
      <Link
        href="/"
        className="p-1 no-underline title font-bold"
        color="secondary"
        underline="none"
      >
        Alex Shan
      </Link>
      <nav className="flex ml-auto">
        {menus.map((menu, index) => (
          <div
            key={menu.href}
            className={cn('px-2', {
              'border-right': index !== menus.length - 1,
            })}
          >
            <Link className="px-2" href={menu.href} underline="none">
              {menu.title}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  )
}

export default Header

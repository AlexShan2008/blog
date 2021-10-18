import Image from 'next/image'
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
    <header className="flex items-center p-3">
      <Image width={185} height={35} src="/assets/logo.png" alt="logo" />
      <Link href="/" className="p-1 hover:underline" color="secondary">
        Alex Shan
      </Link>
      <nav className="flex ml-auto">
        {menus.map((menu, index) => (
          <Link className="p-1" href={menu.href} key={menu.href}>
            {menu.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header

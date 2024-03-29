import Footer from './footer'
import Header from './header'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen flex justify-between flex-col">
        <Header />
        <main className="light">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

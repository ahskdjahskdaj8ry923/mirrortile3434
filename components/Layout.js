import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title = "Your Guide to Mirror Tiles" }) {
  return (
    <>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
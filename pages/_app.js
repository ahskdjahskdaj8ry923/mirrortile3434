import '@styles/globals.css'
import Layout from '@components/Layout'

function Application({ Component, pageProps }) {
  return (
    <Layout title={pageProps.title}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Application

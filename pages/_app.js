import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/herosection.css'
import '../styles/stacksection.css'
import '../styles/article.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

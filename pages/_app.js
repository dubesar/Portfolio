import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/herosection.css'
import '../styles/stacksection.css'
import '../styles/article.css'
import { usePostHog } from 'next-use-posthog'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  usePostHog('phc_rsJ6Frq8PKdP1csXClh7mhKGIUCmvouo5bIPlTm2NZo', { api_host: 'https://app.posthog.com' })
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { connectupProvider } from '../context/connectupContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://buaai0nj4ttx.usemoralis.com:2053/server'
      appId='0GJxnyxLAUzUpVBOtquzyPaZHLaAQxUFw8rmaLyr'
    >
      <connectupProvider>
        <Component {...pageProps} />
      </connectupProvider>
    </MoralisProvider>
  )
}

export default MyApp
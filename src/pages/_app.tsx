import '../styles/global.css'

import {ChallengensContext} from "../contexts/ChallengensContext";

function MyApp({ Component, pageProps }) {
  return (
      <ChallengensContext.Provider value={''}>
        <Component {...pageProps} />
      </ChallengensContext.Provider>
  )
}

export default MyApp

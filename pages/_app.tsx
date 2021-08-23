import React from "react"
import "../styles/globals.css"
import { ReactQueryDevtools } from "react-query-devtools"
import { TimeProvider } from "../services/time/index"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <TimeProvider>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </TimeProvider>
    </>
  )
}

export default MyApp

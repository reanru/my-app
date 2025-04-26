import "@/styles/globals.css";
import type { AppProps } from "next/app";

import AppLayout from "@/components/layouts"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </div>
  )
}

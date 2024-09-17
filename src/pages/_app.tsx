import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </ChakraProvider>
  );
}

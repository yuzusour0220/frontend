'use client'

import { ChakraProvider } from "@chakra-ui/react"
import theme from "../../theme"  // パスは実際の場所に合わせて調整してください

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}
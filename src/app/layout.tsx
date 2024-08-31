import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme";
import { Providers } from "@/components/Proviider";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Kyoto University Windsurfing Club",
  description: "Kyoto University Windsurfing Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box } from "@chakra-ui/react";
import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
    <Box as="main">
      <Header bgcolor="#000080" />
      <Box backgroundColor="gray.50">
      {children}
      
      </Box>
      <Box height={50} backgroundColor="gray.50"></Box>
      <Footer bgColor="#4682B4"/>
      </Box>
    </>
  );
};

export default MainLayout;
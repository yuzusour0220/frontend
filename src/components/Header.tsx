// "use client";
// import React from "react";
// import {
//   Box,
//   Flex,
//   Link,
//   Image,
//   IconButton,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerBody,
//   VStack,
//   useDisclosure,
//   useBreakpointValue,
//   Container,
//   Text
// } from "@chakra-ui/react";
// import { HamburgerIcon } from '@chakra-ui/icons';
// import HeaderItem, { MenuItems } from './HeaderItem';

// const NAV_ITEMS: Array<keyof MenuItems> = ["About", "Member", "Blog", "Race", "Others"];

// type HeaderProps = {
//   bgcolor: string;
// };
// const Header = ({bgcolor}:HeaderProps) => {

//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   return (
//     <Box 
//       as="header" 
//       position="sticky" 
//       top={0} 
//       zIndex={1000} 
//       bg="#315098"
//       boxShadow="0 2px 4px rgba(0,0,0,.1)"
//     >
//       <Container maxW="container.xl" py={4}>
//         <Flex justify="space-between" align="center">
//           <Link href="/" textDecoration="none" display="flex" alignItems="center">
//             <Image src="/photos/logosample.png" alt="logo" boxSize="40px" mr={3} />
//             <Text fontSize={["lg", "xl", "2xl"]} fontWeight="bold" color="white" lineHeight="1">
//               Kyoto Univ Windsurfing Club
//             </Text>
//           </Link>
          
//           {isMobile ? (
//             <IconButton
//               aria-label="Open menu"
//               icon={<HamburgerIcon />}
//               onClick={onOpen}
//               variant="outline"
//               colorScheme="whiteAlpha"
//             />
//           ) : (
//             <Flex as="nav">
//               {NAV_ITEMS.map((item) => (
//                 <Box key={item} mx={4}>
//                   <HeaderItem item={item} />
//                 </Box>
//               ))}
//             </Flex>
//           )}
//         </Flex>
//       </Container>

//       <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
//         <DrawerOverlay />
//         <DrawerContent bg="#315098">
//           <DrawerCloseButton color="white" />
//           <DrawerBody>
//             <VStack spacing={6} align="stretch" mt={12}>
//               {NAV_ITEMS.map((item) => (
//                 <HeaderItem key={item} item={item} isMobile={true} onClose={onClose} />
//               ))}
//             </VStack>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </Box>
//   );
// };

// export default Header;
"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Link,
  Image,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  useDisclosure,
  useBreakpointValue,
  Container,
  Text,
  keyframes,
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import HeaderItem, { MenuItems } from './HeaderItem';

const NAV_ITEMS: Array<keyof MenuItems> = ["About", "Member", "Blog", "Race", "Others"];

const waveAnimation = keyframes`
  0% { transform: translateX(0) translateZ(0) scaleY(1) }
  50% { transform: translateX(-25%) translateZ(0) scaleY(0.8) }
  100% { transform: translateX(-50%) translateZ(0) scaleY(1) }
`;

type HeaderProps = {
  bgcolor?: string;
};

const Header = ({ bgcolor = "#0077be" }: HeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 100; // スクロールの最大値を100pxに設定
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gradientColor = `linear-gradient(45deg, ${bgcolor} ${100 - scrollProgress * 100}%, #005a8e 100%)`;
  const boxShadowOpacity = scrollProgress * 0.1; // 0 から 0.1 の間で変化

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1000}
      ref={headerRef}
      transition="all 0.3s ease"
      bg={gradientColor}
      color="white"
      boxShadow={`0 2px 10px rgba(0,0,0,${boxShadowOpacity})`}
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <Link href="/" textDecoration="none" display="flex" alignItems="center">
            <Image src="/photos/logosample.png" alt="logo" boxSize="50px" mr={3} />
            <Box>
              <Text 
                fontSize={["xl", "2xl", "3xl"]} 
                fontWeight="black" 
                lineHeight="1"
                letterSpacing="wide"
                textTransform="uppercase"
                fontFamily="'Montserrat', sans-serif"
              >
                Kyoto Univ
              </Text>
              <Text 
                fontSize={["sm", "md", "lg"]} 
                fontWeight="medium"
                letterSpacing="wider"
                fontFamily="'Roboto', sans-serif"
              >
                Windsurfing Club
              </Text>
            </Box>
          </Link>
          
          {isMobile ? (
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              onClick={onOpen}
              variant="outline"
              colorScheme="whiteAlpha"
              size="lg"
            />
          ) : (
            <Flex as="nav" align="center">
              {NAV_ITEMS.map((item) => (
                <Box key={item} mx={4}>
                  <HeaderItem item={item} />
                </Box>
              ))}
            </Flex>
          )}
        </Flex>
      </Container>

      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        height="3px"
        bg="rgba(255,255,255,0.3)"
        style={{
          animation: `${waveAnimation} 10s ease-in-out infinite`,
          transformOrigin: "0 100%",
        }}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg={bgcolor}>
          <DrawerCloseButton color="white" />
          <DrawerBody>
            <VStack spacing={6} align="stretch" mt={12}>
              {NAV_ITEMS.map((item) => (
                <HeaderItem key={item} item={item} isMobile={true} onClose={onClose} />
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
// "use client";
// import React from "react";
// import { Box, Container, Stack, Text, Heading, Link, Icon, VStack, HStack } from "@chakra-ui/react";
// import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

// type FooterProps = {
//   bgColor: string;
// };
// const Footer = ({bgColor}: FooterProps) => {
//   const currentYear = new Date().getFullYear();
//   // useColorModeValueの代わりに固定の色を使用
//   const textColor = "white";

//   return (
//     <Box bg={bgColor} color={textColor} marginTop={40}>
//       <Container as={Stack} maxW={'6xl'} py={10}>
//         <Stack direction={{ base: 'column', md: 'row' }} spacing={8} justify={'space-between'}>
          
//             <Heading as="h3" size="md" mb={2}>
//               京都大学ウィンドサーフィン部
//             </Heading>
            
          
          
//           <VStack align={'flex-start'}>
//             <Heading as="h3" size="md" mb={2}>
//               お問い合わせ
//             </Heading>
//             <Text>Email: kyotouniversity.windsurfing@gmail.com</Text>
//           </VStack>
          
//           <VStack align={'flex-start'}>
//             <Heading as="h3" size="md" mb={2}>
//               フォローする
//             </Heading>
//             <HStack spacing={4}>
//               {[
//                 { icon: FaInstagram, url: "https://www.instagram.com/kyodai.wind_12", label: "Instagram" },
//                 { icon: FaFacebook, url: "https://www.facebook.com/kyoto.windsurfing/?locale=ja_JP", label: "Facebook" },
                
//               ].map((social, index) => (
//                 <Link
//                   key={index}
//                   href={social.url}
//                   isExternal
//                   aria-label={`Visit our ${social.label}`}
//                 >
//                   <Icon as={social.icon} w={6} h={6} />
//                 </Link>
//               ))}
//             </HStack>
//           </VStack>
//         </Stack>

//         <Text pt={6} fontSize={'sm'} textAlign={'center'}>
//           &copy; {currentYear} 京都大学ウィンドサーフィン部. All rights reserved.
//         </Text>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;

"use client";

import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  Link,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook } from 'react-icons/fa';

type FooterProps = {
  bgColor: string;
};

const Footer = ({ bgColor }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const textColor = "white";

  return (
    <Box
      bg={`linear-gradient(to bottom, ${bgColor}, #005a8e)`}
      color={textColor}
      position="relative"
      overflow="hidden"
      
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="3px"
        bgGradient={`linear(to-r, ${bgColor}, #005a8e, ${bgColor})`}
        opacity={0.6}
      />
      <Container as={Stack} maxW={'6xl'} py={10}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8} justify={'space-between'}>
          <VStack align={'flex-start'}>
            <Heading
              as="h3"
              fontSize="xl"
              fontWeight="bold"
              fontFamily="'Montserrat', sans-serif"
              textTransform="uppercase"
              letterSpacing="wide"
              mb={2}
            >
              京都大学ウィンドサーフィン部
            </Heading>
          </VStack>

          <VStack align={'flex-start'}>
            <Heading
              as="h3"
              fontSize="lg"
              fontWeight="semibold"
              fontFamily="'Roboto', sans-serif"
              mb={2}
            >
              お問い合わせ
            </Heading>
            <Text fontSize="sm">Email: kyotouniversity.windsurfing@gmail.com</Text>
          </VStack>

          <VStack align={'flex-start'}>
            <Heading
              as="h3"
              fontSize="lg"
              fontWeight="semibold"
              fontFamily="'Roboto', sans-serif"
              mb={2}
            >
              フォローする
            </Heading>
            <HStack spacing={4}>
              {[
                { icon: FaInstagram, url: "https://www.instagram.com/kyodai.wind_12", label: "Instagram" },
                { icon: FaFacebook, url: "https://www.facebook.com/kyoto.windsurfing/?locale=ja_JP", label: "Facebook" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  isExternal
                  aria-label={`Visit our ${social.label}`}
                  _hover={{ transform: 'scale(1.1)', transition: 'all 0.2s' }}
                >
                  <Icon as={social.icon} w={6} h={6} />
                </Link>
              ))}
            </HStack>
          </VStack>
        </Stack>

        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          &copy; {currentYear} 京都大学ウィンドサーフィン部. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
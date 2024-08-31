// import React from "react";
// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   Image,
//   UnorderedList,
//   ListItem,
//   Button,
//   VStack,
//   useColorModeValue,
// } from "@chakra-ui/react";

// function MainComponent() {
//   const bgColor = "blue.50";
//   const textColor = "gray.800";
//   const headingColor = "blue.700";

//   return (
//     <Box minH="100vh" bg={bgColor} py={8}>
//       <Container maxW="4xl" bg="white" borderRadius="lg" boxShadow="xl" p={8}>
//         <VStack spacing={8} align="stretch">
//           <VStack>
//             <Heading
//               as="h1"
//               size="2xl"
//               textAlign="center"
//               color={headingColor}
//               fontFamily="'Noto Sans JP', sans-serif"
//             >
//               京都大学ウィンドサーフィン部
//             </Heading>
//             <Heading
//               as="h1"
//               size="2xl"
//               textAlign="center"
//               color={headingColor}
//               fontFamily="'Noto Sans JP', sans-serif"
//             >
//               へようこそ
//             </Heading>
//           </VStack>

//           <Image
//             src="/photos/kaitosan.jpg" // 実際の画像URLに置き換えてください
//             alt="京都大学ウィンドサーフィン部の活動風景"
//             objectFit="cover"
//             borderRadius="lg"
//             boxShadow="md"
//           />

//           <Text
//             fontSize="lg"
//             color={textColor}
//             fontFamily="'Noto Serif JP', serif"
//           >
//             京都大学ウィンドサーフィン部は、ウィンドサーフィンを通じて心身ともに成長することを目指す学生団体です。
//             琵琶湖の美しい自然の中で、仲間とともに技術を磨き、挑戦し、楽しむ場を提供しています。
//           </Text>

//           <Heading
//             as="h2"
//             size="lg"
//             color={headingColor}
//             fontFamily="'Noto Sans JP', sans-serif"
//           >
//             ウィンドサーフィン部の特徴：
//           </Heading>

//           <UnorderedList
//             spacing={2}
//             pl={4}
//             color={textColor}
//             fontFamily="'Noto Serif JP', serif"
//           >
//             <ListItem>初心者から経験者まで、幅広いレベルの部員が活動</ListItem>
//             <ListItem>琵琶湖での定期的な練習と合宿</ListItem>
//             <ListItem>年間を通じた各種大会への参加</ListItem>
//             <ListItem>体力向上とストレス解消の両立</ListItem>
//             <ListItem>先輩後輩の垣根を越えた交流と絆づくり</ListItem>
//           </UnorderedList>

//           <Text
//             fontSize="lg"
//             color={textColor}
//             fontFamily="'Noto Serif JP', serif"
//           >
//             ウィンドサーフィンは、風と水を相手にする自然スポーツです。
//             技術の向上はもちろん、自然との一体感や達成感を味わえる素晴らしいスポーツです。
//             京大生活をより充実したものにしたい方、新しいことにチャレンジしたい方、
//             ぜひ私たちと一緒にウィンドサーフィンを楽しみませんか？
//           </Text>
//         </VStack>
//       </Container>
//     </Box>
//   );
// }

// export default MainComponent;
"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
  VStack,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaWind, FaWater, FaSun, FaUsers, FaTrophy } from "react-icons/fa";

function MainComponent() {
  return (
    <Box
      minH="100vh"
      py={10}
    >
      <Container maxW="6xl">
        <VStack spacing={12} align="stretch">
          <Box textAlign="center">
            <Heading
              as="h1"
              fontSize={["3xl", "4xl", "5xl"]}
              fontWeight="black"
              color="#0077be"
              fontFamily="'Montserrat', sans-serif"
              textTransform="uppercase"
              letterSpacing="wide"
              lineHeight="1.2"
              mb={4}
            >
              京都大学<br />ウィンドサーフィン部
            </Heading>
            <Text
              fontSize={["xl", "2xl"]}
              fontWeight="medium"
              color="gray.600"
              fontFamily="'Roboto', sans-serif"
            >
              風と波を愛する仲間たちの集い
            </Text>
          </Box>

          <Box
            position="relative"
            height={["300px", "400px", "500px"]}
            overflow="hidden"
            borderRadius="lg"
            boxShadow="2xl"
          >
            <Image
              src="/photos/kaitosan.jpg"
              alt="京都大学ウィンドサーフィン部の活動風景"
              objectFit="cover"
              width="100%"
              height="100%"
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="rgba(0,0,0,0.3)"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                color="white"
                fontSize={["2xl", "3xl", "4xl"]}
                fontWeight="bold"
                textAlign="center"
                fontFamily="'Noto Sans JP', sans-serif"
                textShadow="2px 2px 4px rgba(0,0,0,0.5)"
              >
                ようこそ、海と風の世界へ
              </Text>
            </Box>
          </Box>

          <Text
            fontSize="xl"
            color="gray.700"
            fontFamily="'Noto Serif JP', serif"
            lineHeight="1.8"
          >
            京都大学ウィンドサーフィン部は、ウィンドサーフィンを通じて心身ともに成長することを目指す学生団体です。
            琵琶湖の美しい自然の中で、仲間とともに技術を磨き、挑戦し、楽しむ場を提供しています。
          </Text>

          <Box>
            <Heading
              as="h2"
              fontSize="3xl"
              fontWeight="bold"
              color="#0077be"
              fontFamily="'Noto Sans JP', sans-serif"
              mb={6}
            >
              ウィンドサーフィン部の特徴：
            </Heading>
            <Flex flexWrap="wrap" justifyContent="space-between">
              {[
                { icon: FaUsers, text: "初心者から経験者まで、幅広いレベルの部員が活動" },
                { icon: FaWater, text: "琵琶湖での定期的な練習と合宿" },
                { icon: FaTrophy, text: "年間を通じた各種大会への参加" },
                { icon: FaSun, text: "体力向上とストレス解消の両立" },
                { icon: FaWind, text: "先輩後輩の垣根を越えた交流と絆づくり" },
              ].map((item, index) => (
                <Flex
                  key={index}
                  align="center"
                  bg="white"
                  p={4}
                  borderRadius="md"
                  boxShadow="md"
                  mb={4}
                  width={["100%", "48%", "30%"]}
                >
                  <Icon as={item.icon} boxSize={8} color="#0077be" mr={3} />
                  <Text fontSize="md" fontFamily="'Noto Sans JP', sans-serif">
                    {item.text}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Box>

          <Text
            fontSize="xl"
            color="gray.700"
            fontFamily="'Noto Serif JP', serif"
            lineHeight="1.8"
          >
            ウィンドサーフィンは、風と水を相手にする自然スポーツです。
            技術の向上はもちろん、自然との一体感や達成感を味わえる素晴らしいスポーツです。
            京大生活をより充実したものにしたい方、新しいことにチャレンジしたい方、
            ぜひ私たちと一緒にウィンドサーフィンを楽しみませんか？
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default MainComponent;
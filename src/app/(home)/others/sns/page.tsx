// "use client";
// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   VStack,
//   Heading,
//   Text,
//   SimpleGrid,
//   Link,
//   Container,
//   Icon,
//   Spinner,
// } from '@chakra-ui/react';
// import { FaInstagram, FaFacebook } from 'react-icons/fa';
// import axios from 'axios';

// interface SocialAccount {
//   type: 'instagram' | 'facebook';
//   username: string;
//   url: string;
//   description: string;
// }

// interface InstaShinkan {
//   id: number;
//   account_name: string;
//   url: string;
// }

// const SNSPage: React.FC = () => {
//   const [instaShinkan, setInstaShinkan] = useState<InstaShinkan | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchInstagramData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get<InstaShinkan[]>(`${process.env.NEXT_PUBLIC_API_URL}/instashinkan/`);
//         if (response.data.length > 0) {
//           setInstaShinkan(response.data[0]);
//         }
//       } catch (error) {
//         console.error("There was an error fetching Instagram data!", error);
//         setError("Instagram データの取得中にエラーが発生しました。");
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchInstagramData();
//   }, []);

//   const socialAccounts: SocialAccount[] = [
//     {
//       type: 'instagram',
//       username: '@kyodai.wind_12',
//       url: 'https://www.instagram.com/kyodai.wind_12/',
//       description: '京大ウィンドサーフィン部の公式Instagramアカウントです。日々の活動や大会の様子を投稿しています。'
//     },
//     {
//       type: 'instagram',
//       username: isLoading ? 'Loading...' : (instaShinkan ? `@${instaShinkan.account_name}` : 'データなし'),
//       url: instaShinkan?.url ?? '#',
//       description: '新入生向けの京大ウィンドサーフィン部Instagramアカウントです。新歓情報や初心者向けの情報を発信しています。'
//     },
//     {
//       type: 'facebook',
//       username: '京都大学ウインドサーフィン部',
//       url: 'https://www.facebook.com/kyoto.windsurfing/?locale=ja_JP',
//       description: '京大ウィンドサーフィン部の公式Facebookページです。イベントの告知や部の歴史などを共有しています。'
//     }
//   ];

//   if (error) {
//     return <Container centerContent><Heading color="red.500">{error}</Heading></Container>;
//   }

//   return (
//     <Container maxW="container.xl" py={10}>
//       <VStack spacing={8} as="section" alignItems="center" width="full">
//         <Heading as="h1" size="2xl" textAlign="center">
//           SNS アカウント
//         </Heading>
//         <Text fontSize="xl" textAlign="center" maxW="container.md">
//           京都大学ウィンドサーフィン部のSNSアカウントをご紹介します。フォローして最新情報をチェックしてください！
//         </Text>

//         {isLoading ? (
//           <Spinner size="xl" />
//         ) : (
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="full">
//             {socialAccounts.map((account, index) => (
//               <Box
//                 key={index}
//                 borderWidth={1}
//                 borderRadius="lg"
//                 p={6}
//                 boxShadow="md"
//                 transition="all 0.3s"
//                 _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
//               >
//                 <VStack spacing={4} alignItems="flex-start">
//                   <Icon
//                     as={account.type === 'instagram' ? FaInstagram : FaFacebook}
//                     w={10}
//                     h={10}
//                     color={account.type === 'instagram' ? 'pink.500' : 'blue.500'}
//                   />
//                   <Heading as="h2" size="lg">{account.username}</Heading>
//                   <Text>{account.description}</Text>
//                   <Link
//                     href={account.url}
//                     isExternal
//                     color={account.type === 'instagram' ? 'pink.500' : 'blue.500'}
//                     fontWeight="bold"
//                   >
//                     アカウントを見る
//                   </Link>
//                 </VStack>
//               </Box>
//             ))}
//           </SimpleGrid>
//         )}
//       </VStack>
//     </Container>
//   );
// }

// export default SNSPage;
"use client";

import React, { useEffect, useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Link,
  Container,
  Icon,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import axios from 'axios';

interface SocialAccount {
  type: 'instagram' | 'facebook';
  username: string;
  url: string;
  description: string;
}

interface InstaShinkan {
  id: number;
  account_name: string;
  url: string;
}

const SNSPage: React.FC = () => {
  const [instaShinkan, setInstaShinkan] = useState<InstaShinkan | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<InstaShinkan[]>(`${process.env.NEXT_PUBLIC_API_URL}/instashinkan/`);
        if (response.data.length > 0) {
          setInstaShinkan(response.data[0]);
        }
      } catch (error) {
        console.error("There was an error fetching Instagram data!", error);
        setError("Instagram データの取得中にエラーが発生しました。");
      } finally {
        setIsLoading(false);
      }
    };
    fetchInstagramData();
  }, []);

  const socialAccounts: SocialAccount[] = [
    {
      type: 'instagram',
      username: '@kyodai.wind_12',
      url: 'https://www.instagram.com/kyodai.wind_12/',
      description: '京大ウィンドサーフィン部の公式Instagramアカウントです。日々の活動や大会の様子を投稿しています。'
    },
    {
      type: 'instagram',
      username: isLoading ? 'Loading...' : (instaShinkan ? `@${instaShinkan.account_name}` : 'データなし'),
      url: instaShinkan?.url ?? '#',
      description: '新入生向けの京大ウィンドサーフィン部Instagramアカウントです。新歓情報を発信しています。'
    },
    {
      type: 'facebook',
      username: '京都大学ウインドサーフィン部',
      url: 'https://www.facebook.com/kyoto.windsurfing/?locale=ja_JP',
      description: '京大ウィンドサーフィン部の公式Facebookページです。活動、戦績報告を主に共有しています。'
    }
  ];

  if (error) {
    return (
      <Box bg="gray.50" minH="100vh" py={12}>
        <Container centerContent>
          <Heading color="red.500">{error}</Heading>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg="gray.50" minH="100vh" py={12}>
      <Container maxW="container.xl">
        <VStack spacing={12} as="section" alignItems="center" width="full">
          <Box textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              color="#0077be"
              fontFamily="'Montserrat', sans-serif"
              fontWeight="black"
              mb={4}
              borderBottom="4px solid #0077be"
              pb={2}
              display="inline-block"
            >
              SNS アカウント
            </Heading>
            <Text fontSize="xl" fontFamily="'Roboto', sans-serif" mt={4} color="black">
              京都大学ウィンドサーフィン部のSNSアカウントをご紹介します。フォローして最新情報をチェックしてください！
            </Text>
          </Box>

          {isLoading ? (
            <Center height="200px">
              <Spinner size="xl" color="#0077be" thickness="4px" />
            </Center>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="full">
              {socialAccounts.map((account, index) => (
                <Box
                  key={index}
                  borderWidth={1}
                  borderRadius="lg"
                  p={6}
                  bg="white"
                  boxShadow="md"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
                >
                  <VStack spacing={4} alignItems="flex-start">
                    <Icon
                      as={account.type === 'instagram' ? FaInstagram : FaFacebook}
                      w={10}
                      h={10}
                      color={account.type === 'instagram' ? 'pink.500' : 'blue.500'}
                    />
                    <Heading as="h2" size="lg" fontFamily="'Montserrat', sans-serif" color="black">
                      {account.username}
                    </Heading>
                    <Text fontFamily="'Roboto', sans-serif" fontSize="md" color="gray.600">
                      {account.description}
                    </Text>
                    <Link
                      href={account.url}
                      isExternal
                      color={account.type === 'instagram' ? 'pink.500' : 'blue.500'}
                      fontWeight="bold"
                      fontFamily="'Roboto', sans-serif"
                      _hover={{ textDecoration: 'underline' }}
                    >
                      アカウントを見る
                    </Link>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </Container>
    </Box>
  );
}

export default SNSPage;
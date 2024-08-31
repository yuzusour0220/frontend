// "use client";
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Center,
//   Flex,
//   GridItem,
//   Heading,
//   Image,
//   SimpleGrid,
//   Text,
// } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// type kaiseiProps = {
//   params: {
//     kaisei: keyof kaiseitaiouProps;
//   };
// };

// const kaiseitaiou: kaiseitaiouProps = {
//   "4th": "4回生",
//   "3rd": "3回生",
//   "2nd": "2回生",
//   "1st": "1回生",
//   ob: "OB",
// };
// type kaiseitaiouProps = {
//   "4th": string;
//   "3rd": string;
//   "2nd": string;
//   "1st": string;
//   ob: string;
// };

// interface User {
//   name: string;
//   id: number;
//   photo: string;
//   sail_number: string;
//   introduction: string;
//   position: string;
//   grade: string;
//   faculty: string;
// }

// const sortUsers = (users: User[]): User[] => {
//   return users.sort((a, b) => {
//     if (a.position === "主将") return -1;
//     if (b.position === "主将") return 1;
//     if (a.position === "副将") return -1;
//     if (b.position === "副将") return 1;
//     return 0;
//   });
// };

// const Member = ({ params }: kaiseiProps) => {
//   const [users, setUsers] = useState<User[]>([]);
  
//   useEffect(() => {
//     axios
//       .get(`${process.env.NEXT_PUBLIC_API_URL}/members/`)
//       .then((res) => {
//         const sortedUsers = sortUsers(res.data);
//         setUsers(sortedUsers);
//       })
//       .catch((error) => {
//         console.error("There was an error!", error);
//       });
//   }, []);

//   const filteredAndSortedUsers = users
//     .filter((user) => params.kaisei.includes(user.grade))
//     .sort((a, b) => {
//       if (a.position.includes("主将")) return -1;
//       if (b.position.includes("主将")) return 1;
//       if (a.position.includes("副将")) return -1;
//       if (b.position.includes("副将")) return 1;
//       return 0;
//     });

//   return (
//     <>
//       <Center margin={10}>
//         <Heading>{kaiseitaiou[params.kaisei]}</Heading>
//       </Center>

//       <SimpleGrid
//         columns={{base: 1, md: 2, lg: 3}}
//         spacing={4}
//         width="95%"
//         margin="auto"
//         alignItems="stretch"
//       >
//         {filteredAndSortedUsers.map((user) => (
//           <GridItem key={user.name} w="100%" display="flex">
//             <Card backgroundColor="gray.100" alignItems="center">
//               <CardHeader>
//                 <Center>
//                   <Heading size="md">{user.name}</Heading>
//                 </Center>
//                 <Text fontSize="lg" align="center" marginTop={2}>
//                   {user.sail_number} {user.position}  {user.faculty}
//                 </Text>
//               </CardHeader>
//               <CardBody>
//                 <Flex justifyContent="center" width="100%">
//                   <Image
//                     src={user.photo}
//                     alt="logo"
//                     width="90%"
//                     maxWidth="100%"
//                     objectFit="cover"
//                     marginBottom={4}
//                   />
//                 </Flex>
//                 <Text fontSize="lg">{user.introduction}</Text>
//               </CardBody>
//             </Card>
//           </GridItem>
//         ))}
//       </SimpleGrid>
//     </>
//   );
// };

// export default Member;
"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Box,
  AspectRatio,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

type kaiseiProps = {
  params: {
    kaisei: keyof kaiseitaiouProps;
  };
};

const kaiseitaiou: kaiseitaiouProps = {
  "4th": "4回生",
  "3rd": "3回生",
  "2nd": "2回生",
  "1st": "1回生",
  ob: "OB",
};

type kaiseitaiouProps = {
  "4th": string;
  "3rd": string;
  "2nd": string;
  "1st": string;
  ob: string;
};

interface User {
  name: string;
  id: number;
  photo: string;
  sail_number: string;
  introduction: string;
  position: string;
  grade: string;
  faculty: string;
}

const sortUsers = (users: User[]): User[] => {
  return users.sort((a, b) => {
    if (a.position === "主将") return -1;
    if (b.position === "主将") return 1;
    if (a.position === "副将") return -1;
    if (b.position === "副将") return 1;
    return 0;
  });
};

const Member = ({ params }: kaiseiProps) => {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/members/`)
      .then((res) => {
        const sortedUsers = sortUsers(res.data);
        setUsers(sortedUsers);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  const filteredAndSortedUsers = users
    .filter((user) => params.kaisei.includes(user.grade))
    .sort((a, b) => {
      if (a.position.includes("主将")) return -1;
      if (b.position.includes("主将")) return 1;
      if (a.position.includes("副将")) return -1;
      if (b.position.includes("副将")) return 1;
      return 0;
    });

    return (
      <Box
        
        minHeight="100vh"
        py={10}
      >
        <Center margin={10}>
          <Heading
            color="#0077be"
            fontSize="4xl"
            fontWeight="black"
            fontFamily="'Montserrat', sans-serif"
            textTransform="uppercase"
            letterSpacing="wide"
            borderBottom="4px solid #0077be"
            paddingBottom={2}
          >
            {kaiseitaiou[params.kaisei]}
          </Heading>
        </Center>
  
        <SimpleGrid
          columns={{base: 1, md: 2, lg: 3}}
          spacing={6}
          width="95%"
          margin="auto"
          alignItems="stretch"
        >
          {filteredAndSortedUsers.map((user) => (
            <GridItem key={user.name} w="100%" display="flex">
              <Card
                backgroundColor="white"
                boxShadow="md"
                borderRadius="md"
                overflow="hidden"
                transition="all 0.3s"
                _hover={{ boxShadow: 'lg' }}
                height="550px" // 高さを少し調整
                width="100%"
              >
                <CardHeader bg="#0077be" color="white" py={3}>
                  <Center>
                    <Heading size="md" fontFamily="'Roboto', sans-serif">{user.name}</Heading>
                  </Center>
                  <Text fontSize="sm" align="center" marginTop={1} fontFamily="'Roboto', sans-serif">
                    {user.sail_number} | {user.position} | {user.faculty}
                  </Text>
                </CardHeader>
                <CardBody display="flex" flexDirection="column" justifyContent="space-between" p={4}>
                  <AspectRatio ratio={4 / 3} width="100%" marginBottom={4}>
                    <Image
                      src={user.photo}
                      alt={`${user.name}の写真`}
                      objectFit="cover"
                      borderRadius="md"
                    />
                  </AspectRatio>
                  <Text 
                    fontSize="sm" 
                    fontFamily="'Roboto', sans-serif" 
                    lineHeight="1.6"
                    overflow="auto"
                    flex="1"
                    maxHeight="200px" // スクロール可能な最大高さを設定
                  >
                    {user.introduction}
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    );
  };
  
  export default Member;
"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  Box,
  Link,
  VStack,
} from "@chakra-ui/react";
import NextLink from 'next/link';

interface Member {
  id: number;
  name: string;
  photo: string;
  sail_number: string;
  introduction: string;
  position: string;
  grade: string;
  faculty: string;
  generation: number;
}

interface GroupedMembers {
  [key: number]: Member[];
}

const OBMembersPage = () => {
  const [groupedObMembers, setGroupedObMembers] = useState<GroupedMembers>({});

  useEffect(() => {
    const fetchObMembers = async () => {
      try {
        const response = await axios.get<Member[]>(`${process.env.NEXT_PUBLIC_API_URL}/members/?grade=ob`);
        const filteredObMembers = response.data.filter((member: Member) => member.grade === 'OB');
        
        // グループ化
        const grouped = filteredObMembers.reduce((acc: GroupedMembers, member: Member) => {
          if (!acc[member.generation]) {
            acc[member.generation] = [];
          }
          acc[member.generation].push(member);
          return acc;
        }, {});

        setGroupedObMembers(grouped);
      } catch (error) {
        console.error('Error fetching OB members:', error);
      }
    };

    fetchObMembers();
  }, []);

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
          OBメンバー
        </Heading>
      </Center>

      <SimpleGrid
        columns={[1, 2, 3, 4]}
        spacing={6}
        width="95%"
        margin="auto"
        alignItems="stretch"
      >
        {Object.entries(groupedObMembers)
          .sort(([a], [b]) => Number(b) - Number(a))
          .map(([generation, members]) => (
          <GridItem key={generation} w="100%" display="flex">
            <Card
              backgroundColor="white"
              boxShadow="md"
              borderRadius="md"
              overflow="hidden"
              transition="all 0.3s"
              _hover={{ boxShadow: 'lg', transform: 'translateY(-5px)' }}
              width="100%"
            >
              <CardHeader bg="#0077be" color="white" py={3}>
                <Center>
                  <Heading size="md" fontFamily="'Roboto', sans-serif">{generation}期</Heading>
                </Center>
              </CardHeader>
              <CardBody>
                <VStack spacing={3} align="stretch">
                  <Text fontSize="sm" fontFamily="'Roboto', sans-serif" textAlign="center">
                    メンバー数: {members.length}名
                  </Text>
                  <Center>
                    <NextLink href={`/member/ob/${generation}`} passHref>
                      <Link
                        color="blue.500"
                        fontWeight="bold"
                        fontSize="md"
                        fontFamily="'Roboto', sans-serif"
                        _hover={{ textDecoration: 'underline' }}
                      >
                        詳細を見る
                      </Link>
                    </NextLink>
                  </Center>
                </VStack>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default OBMembersPage;
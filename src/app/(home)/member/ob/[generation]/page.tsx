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

type ObGenerationProps = {
  params: {
    generation: string;
  };
};

interface Member {
  name: string;
  id: number;
  photo: string;
  sail_number: string;
  introduction: string;
  position: string;
  grade: string;
  faculty: string;
  generation: number;
}

const ObGenerationPage = ({ params }: ObGenerationProps) => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/members/?grade=ob`)
      .then((res) => {
        const filteredMembers = res.data.filter(
          (member: Member) => member.generation.toString() === params.generation
        );
        setMembers(filteredMembers);
      })
      .catch((error) => {
        console.error("There was an error fetching OB members:", error);
      });
  }, [params.generation]);

  return (
    <Box
      bg="gray.100"
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
          {params.generation}期 OBメンバー
        </Heading>
      </Center>

      <SimpleGrid
        columns={[1, 2, 2, 2, 3]}
        spacing={6}
        width="95%"
        margin="auto"
        alignItems="stretch"
      >
        {members.map((member) => (
          <GridItem key={member.id} w="100%" display="flex">
            <Card
              backgroundColor="white"
              boxShadow="md"
              borderRadius="md"
              overflow="hidden"
              transition="all 0.3s"
              _hover={{ boxShadow: 'lg' }}
              height="550px"
              width="100%"
            >
              <CardHeader bg="#0077be" color="white" py={3}>
                <Center>
                  <Heading size="md" fontFamily="'Roboto', sans-serif">{member.name}</Heading>
                </Center>
                <Text fontSize="sm" align="center" marginTop={1} fontFamily="'Roboto', sans-serif">
                  {member.sail_number} | {member.position} | {member.faculty}
                </Text>
              </CardHeader>
              <CardBody display="flex" flexDirection="column" justifyContent="space-between" p={4}>
                <AspectRatio ratio={16 / 9} width="100%" marginBottom={4}>
                  <Image
                    src={member.photo}
                    alt={`${member.name}の写真`}
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
                  maxHeight="200px"
                >
                  {member.introduction}
                </Text>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ObGenerationPage;
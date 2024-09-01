"use client";

import React from 'react';
import { Box, VStack, Heading, Text, Image, Container, SimpleGrid, AspectRatio } from '@chakra-ui/react';

interface Captain {
  id: number;
  name: string;
  message: string;
  photo: string;
  status: string;
}

const CaptainCard: React.FC<Captain> = ({ name, message, photo, status }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="lg"
    bg="white"
    transition="all 0.3s"
    _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
  >
    <AspectRatio ratio={3 / 2}>
      <Image src={photo} alt={name} objectFit="cover" />
    </AspectRatio>
    <Box p={6}>
      <VStack spacing={4} align="start">
        <Text fontWeight="bold" color="blue.500" fontSize="lg" fontFamily="'Roboto', sans-serif">
          {status}
        </Text>
        <Heading as="h3" size="lg" color="#0077be" fontFamily="'Montserrat', sans-serif">
          {name}
        </Heading>
        <Text fontFamily="'Roboto', sans-serif" fontSize="md" lineHeight="tall">
          {message}
        </Text>
      </VStack>
    </Box>
  </Box>
);

async function getCaptains() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shushoaisatsu/`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch captains data');
  }
  return res.json();
}

export default async function CaptainsGreeting() {
  const captains: Captain[] = await getCaptains();

  // Sort captains by status: 主将 first, then 前主将
  const sortedCaptains = captains.sort((a, b) => {
    if (a.status === '主将') return -1;
    if (b.status === '主将') return 1;
    if (a.status === '前主将') return -1;
    if (b.status === '前主将') return 1;
    return 0;
  });

  return (
    <Box bg="gray.50" minH="100vh" py={12}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
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
              主将・前主将挨拶
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {sortedCaptains.map((captain) => (
              <CaptainCard key={captain.id} {...captain} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
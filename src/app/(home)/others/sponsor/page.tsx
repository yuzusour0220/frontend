"use client";

import React, { useState, useEffect } from 'react'
import { Box, Container, Heading, SimpleGrid, Text, Image, VStack, Link, Center, Spinner } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface Sponsor {
  id: number;
  name: string;
  description: string;
  url: string;
  photo: string;
}

interface SponsorCardProps extends Sponsor {}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, description, url, photo }) => (
  <MotionBox
    borderWidth="1px"
    borderRadius="lg"
    p={6}
    bg="white"
    boxShadow="md"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  >
    <VStack spacing={4} align="stretch">
      <Center>
        <Image src={photo} alt={name} w="90%" objectFit="contain"  />
      </Center>
      <Heading size="md" color="#0077be" fontFamily="'Montserrat', sans-serif">{name}</Heading>
      <Text fontSize="md" color="gray.600" fontFamily="'Roboto', sans-serif">{description}</Text>
      <Link href={url} isExternal color="blue.500" fontWeight="bold" fontFamily="'Roboto', sans-serif">
        ウェブサイトはこちら
      </Link>
    </VStack>
  </MotionBox>
)

const SponsorsPage: React.FC = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sponsor/`);
        if (!response.ok) {
          throw new Error('Failed to fetch sponsors');
        }
        const data = await response.json();
        setSponsors(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load sponsors. Please try again later.');
        setLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  if (loading) {
    return (
      <Center height="100vh" bg="gray.50">
        <Spinner size="xl" color="#0077be" thickness="4px" />
      </Center>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" py={16} color="red.500" bg="gray.50" minH="100vh">
        <Heading as="h2" size="xl" fontFamily="'Montserrat', sans-serif">
          {error}
        </Heading>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.xl" py={16}>
        <VStack spacing={12} align="stretch">
          <Box textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              mb={4}
              color="#0077be"
              fontFamily="'Montserrat', sans-serif"
              fontWeight="black"
              borderBottom="4px solid #0077be"
              paddingBottom={2}
              display="inline-block"
            >
              スポンサー
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2}} spacing={10}>
            {sponsors.map((sponsor) => (
              <SponsorCard key={sponsor.id} {...sponsor} />
            ))}
          </SimpleGrid>

          <Box textAlign="center" mt={12} bg="blue.50" p={8} borderRadius="lg" boxShadow="md">
            <Text fontSize="xl" fontFamily="'Roboto', sans-serif" color="gray.700">
              スポンサーに興味がある企業様は{' '}
              <Link href="mailto:sponsor@kuwindsurfing.com" color="blue.500" fontWeight="bold">
                sponsor@kuwindsurfing.com
              </Link>
              {' '}までご連絡ください。
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default SponsorsPage
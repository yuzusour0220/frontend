"use client"

import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Image, Heading, Container, Text, Center, Spinner, Flex } from '@chakra-ui/react';
import axios from 'axios';

interface Gallery {
  id: number;
  photo: string;
}

const Gallery: React.FC = () => {
  const [galleryPhotos, setGalleryPhotos] = useState<Gallery[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/galleryphotos/`)
      .then((res) => {
        setGalleryPhotos(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setError("写真の取得中にエラーが発生しました。");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return (
    <Center height="100vh" bg="gray.50">
      <Spinner size="xl" color="#0077be" thickness="4px" />
    </Center>
  );

  if (error) return (
    <Center height="100vh" bg="gray.50">
      <Heading color="red.500" fontSize="xl" fontFamily="'Roboto', sans-serif">
        {error}
      </Heading>
    </Center>
  );

  return (
    <Box bg="gray.50" minHeight="100vh" py={10}>
      <Container maxW="container.xl" py={8}>
        <Center>
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            mb={12}
            color="#0077be"
            fontFamily="'Montserrat', sans-serif"
            fontWeight="black"
            borderBottom="4px solid #0077be"
            paddingBottom={4}
            width="fit-content"
            margin="0 auto 4 auto"
          >
            ギャラリー
          </Heading>
        </Center>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {galleryPhotos.map((photo: Gallery) => (
            <Box
              key={photo.id}
              overflow="hidden"
              borderRadius="lg"
              boxShadow="md"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: 'xl',
                zIndex: 1
              }}
              bg="white"
              
            >
              <Flex 
                justifyContent="center" 
                alignItems="center" 
                height="100%" 
                width="100%"
                overflow="hidden"
              >
                <Image
                  src={photo.photo}
                  alt={"ギャラリー写真"}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
        {galleryPhotos.length === 0 && (
          <Text
            textAlign="center"
            fontSize="xl"
            mt={12}
            fontFamily="'Roboto', sans-serif"
            color="gray.600"
          >
            写真がありません。
          </Text>
        )}
      </Container>
    </Box>
  );
};

export default Gallery;
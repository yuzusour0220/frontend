import React from 'react';
import { Box, Text, Link as ChakraLink, VStack, Flex, Icon } from '@chakra-ui/react';
import { FaInfoCircle } from 'react-icons/fa';
import NextLink from 'next/link';

interface AnnouncementProps {
  title: string;
  date: string;
  link: string;
}

const Announcement: React.FC<AnnouncementProps> = ({ title, date, link }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={5}
      bg="white"
      boxShadow="md"
      maxW="sm"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
    >
      <VStack align="start" spacing={3}>
        <Flex alignItems="center" width="100%">
          <Icon as={FaInfoCircle} color="#0077be" boxSize={5} mr={2} />
          <Text fontWeight="bold" fontSize="lg" color="#0077be" fontFamily="'Montserrat', sans-serif">
            お知らせ
          </Text>
        </Flex>
        <Text fontSize="md" fontWeight="medium" color="gray.700" fontFamily="'Roboto', sans-serif">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.500" fontFamily="'Roboto', sans-serif">
          {date}
        </Text>
        <NextLink href={link} passHref legacyBehavior>
          <ChakraLink
            color="#0077be"
            fontWeight="bold"
            fontSize="sm"
            fontFamily="'Roboto', sans-serif"
            _hover={{ textDecoration: 'underline' }}
          >
            リザルトを見る &gt;
          </ChakraLink>
        </NextLink>
      </VStack>
    </Box>
  );
};

export default Announcement;
"use client";

import React from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Text, Container, useColorModeValue, Center } from '@chakra-ui/react';

interface Member {
  id: number;
  name: string;
  sail_number: string;
  grade: string;
}

const SailNumberDisplay: React.FC = () => {
  const [members, setMembers] = React.useState<Member[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/members/`);
        const data = await response.json();

        const filteredMembers = data.filter((member: Member) => member.grade !== 'OB' && member.sail_number);
        
        const sortedMembers = filteredMembers.sort((a, b) => {
          const [, aNum] = a.sail_number.split('-');
          const [, bNum] = b.sail_number.split('-');
          const aLastTwo = parseInt(aNum);
          const bLastTwo = parseInt(bNum);
          
          if (aLastTwo < 10 && bLastTwo >= 10) return -1;
          if (aLastTwo >= 10 && bLastTwo < 10) return 1;
          
          return aLastTwo - bLastTwo;
        });

        setMembers(sortedMembers);
        
        if (sortedMembers.length === 0) {
          setError('フィルタリング後のメンバーが0人です。フィルタリングの条件を確認してください。');
        }
      } catch (error) {
        console.error('Error fetching members:', error);
        setError('メンバーデータの取得中にエラーが発生しました。');
      }
    };

    fetchMembers();
  }, []);

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const tableHeaderBg = useColorModeValue('blue.500', 'blue.200');
  const tableHeaderColor = useColorModeValue('white', 'gray.800');
  const tableBg = useColorModeValue('white', 'gray.700');
  const tableBorderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box bg={bgColor} minH="100vh" py={12}>
      <Container maxW="container.xl">
        <Center>
        <Heading
          as="h1"
          size="xl"
          color="#0077be"
          fontFamily="'Montserrat', sans-serif"
          fontWeight="black"
          textAlign="center"
          mb={12}
          borderBottom="4px solid #0077be"
          pb={2}
          display="inline-block"
        >
          セイルナンバー
        </Heading></Center>
        {error && (
          <Text color="red.500" mb={4} fontFamily="'Roboto', sans-serif">{error}</Text>
        )}
        {members.length > 0 ? (
          <Box
            borderRadius="lg"
            overflow="hidden"
            boxShadow="xl"
            bg={tableBg}
          >
            <Table variant="simple">
              <Thead>
                <Tr bg={tableHeaderBg}>
                  <Th color={tableHeaderColor} fontFamily="'Montserrat', sans-serif">セイルナンバー</Th>
                  <Th color={tableHeaderColor} fontFamily="'Montserrat', sans-serif">名前</Th>
                  <Th color={tableHeaderColor} fontFamily="'Montserrat', sans-serif">学年</Th>
                </Tr>
              </Thead>
              <Tbody>
                {members.map((member) => (
                  <Tr key={member.id} _hover={{ bg: 'gray.100' }} transition="all 0.2s">
                    <Td fontFamily="'Roboto', sans-serif" fontWeight="bold">{member.sail_number}</Td>
                    <Td fontFamily="'Roboto', sans-serif">{member.name}</Td>
                    <Td fontFamily="'Roboto', sans-serif">{member.grade}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        ) : (
          <Text fontFamily="'Roboto', sans-serif" fontSize="lg" textAlign="center">
            loading...
          </Text>
        )}
      </Container>
    </Box>
  );
};

export default SailNumberDisplay;
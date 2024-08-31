// app/dashboard/page.tsx
'use client'

import React from 'react';
import { Box, Flex, Heading, Button, HStack, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import DashboardContent from '@/components/DashBoard';



const MemberDashboard: React.FC = () => {
  const router = useRouter();
  const toast = useToast();

  const handleLogout = async () => {
    // トークンを削除
    document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    toast({
      title: "ログアウト成功",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    router.push('/others/login');
  };

  return (
    <Box>
      <Flex as="header" bg="blue.500" color="white" p={4} alignItems="center">
        <Heading size="lg">部員ダッシュボード</Heading>
        <HStack ml="auto" spacing={4}>
          <Button variant="ghost" onClick={handleLogout}>ログアウト</Button>
        </HStack>
      </Flex>
      <DashboardContent />
    </Box>
  );
};

export default MemberDashboard;
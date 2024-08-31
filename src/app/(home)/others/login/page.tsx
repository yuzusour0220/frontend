'use client'

import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

// 仮のユーザーデータ
const users = [
  { username: 'kyodaiwind', password: 'kyodaiwind' },
  // 必要に応じて他のユーザーを追加
];

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // ユーザー認証
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      // 認証成功
      const token = 'sample_token_' + user.username; // 簡易的なトークン生成
      document.cookie = `auth_token=${token}; path=/; max-age=86400; secure; samesite=strict`;

      toast({
        title: "ログイン成功",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      router.push('/dashboard');
    } else {
      // 認証失敗
      toast({
        title: "ログイン失敗",
        description: "ユーザー名またはパスワードが間違っています",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <form onSubmit={handleLogin}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>ユーザー名</FormLabel>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>パスワード</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">ログイン</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default LoginPage;
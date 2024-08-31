"use client";

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  OrderedList,
  ListItem,
  Link,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const OBregister: React.FC = () => {
  const bgColor = 'gray.50';
  const cardBgColor = 'white';
  const textColor = 'gray.700';
  const headingColor = '#0077be';
  const linkColor = 'blue.500';

  return (
    <Box minH="100vh" bg={bgColor} py={[8, 12]}>
      <Container maxW="4xl" bg={cardBgColor} borderRadius="lg" boxShadow="xl" p={[6, 8]}>
        <VStack spacing={8} align="stretch">
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            color={headingColor}
            fontFamily="'Montserrat', sans-serif"
            fontWeight="black"
            mb={4}
          >
            シクミネットへの登録のお願い
          </Heading>

          <Heading
            as="h2"
            size="xl"
            color={headingColor}
            fontFamily="'Montserrat', sans-serif"
            fontWeight="bold"
          >
            OB・OGさん方へ
          </Heading>

          <Text color={textColor} fontSize="lg" fontFamily="'Roboto', sans-serif" lineHeight="tall">
            お疲れ様です。いつも温かいご声援・ご支援ありがとうございます。今回はしくみネット登録についてのご案内です。既に登録してくださっている方は飛ばしていただいて大丈夫です。
          </Text>

          <Text color={textColor} fontSize="lg" fontFamily="'Roboto', sans-serif" lineHeight="tall">
            現在、京都大学ウインドサーフィン部はOBOG管理プラットフォームとして、しくみねっとを利用しております。これまでメール等で行っていた今後OB・OGさん方への連絡をしくみネット上のみに統一させていただいております。そのためしくみネットへの登録をお願いしたいです。また、しくみネット上からご支援の方もしていただけます。是非よろしくお願いします。
          </Text>

          <Text color={textColor} fontSize="lg" fontFamily="'Roboto', sans-serif" lineHeight="tall">
            OB・OGさん方には、年1,000円のランニングコストを負担していただき、3つの会員種別から1つを選択して、参加していただいております。艇庫代や道具代の値上げが進み、金銭面での負担が大きくなっていることが現状です。プラットフォームの導入により、安定的にOBOG会費が集まることが予想されます。ご負担をおかけしますが、結果で恩返しできるように頑張りますので、ご協力よろしくお願いします。
          </Text>

          <Box>
            <Heading as="h3" size="lg" mb={4} color={headingColor} fontFamily="'Montserrat', sans-serif">
              登録手順:
            </Heading>
            <OrderedList spacing={2} pl={6} color={textColor} fontSize="lg" fontFamily="'Roboto', sans-serif">
              <ListItem>マイページへのログイン</ListItem>
              <ListItem>パスワード変更</ListItem>
              <ListItem>会員情報の登録</ListItem>
              <ListItem>クレカ情報の登録(任意)</ListItem>
            </OrderedList>
          </Box>

          <Box bg="blue.50" p={6} borderRadius="md" boxShadow="md">
            <Text fontWeight="bold" mb={3} fontSize="xl" color={headingColor}>ログイン情報:</Text>
            <Text mb={2} fontSize="lg">URL: <Link href="https://kyodaiwindsurf.shikuminet.jp/login/" color={linkColor} isExternal>https://kyodaiwindsurf.shikuminet.jp/login/</Link></Text>
            <Text mb={2} fontSize="lg">ID: 皆様のメールアドレス</Text>
            <Text fontSize="lg">PW: Kyodaiwind12　（※1文字目は大文字）</Text>
          </Box>

          <Text color={textColor} fontSize="lg" fontFamily="'Roboto', sans-serif" lineHeight="tall">
            メールアドレスをこちらが把握できていない方はマイページが作成できていないためログインができません。そのような場合は下記のメールアドレスか、各種SNSへのDMをよろしくお願いします。その際は、氏名・何期・ご自身のメールアドレスの記載をお願いします。
          </Text>

          <Box textAlign="center" py={4}>
            <Text fontWeight="bold" mb={2} fontSize="xl" color={headingColor}>京都大学ウインドサーフィン部メールアドレス</Text>
            <Link href="mailto:kyotouniversity.windsurfing@gmail.com" color={linkColor} fontSize="lg">
              kyotouniversity.windsurfing@gmail.com
            </Link>
          </Box>

          <Box textAlign="center" py={6}>
            <Button
              as="a"
              href="https://kyodaiwindsurf.shikuminet.jp/login/"
              colorScheme="blue"
              size="lg"
              borderRadius="full"
              px={8}
              py={6}
              fontSize="xl"
              fontWeight="bold"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
              transition="all 0.3s"
            >
              シクミネットにログイン
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default OBregister;
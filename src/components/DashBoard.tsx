// app/components/DashboardContent.tsx
"use client";

import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Icon,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { FiVideo, FiFileText } from "react-icons/fi";
import Link from "next/link";

const DashboardContent: React.FC = () => {
  return (
    <Flex p={8}>
      <VStack align="stretch" width="200px" spacing={4} mr={8}>
        <Link href="https://drive.google.com/drive/folders/1EW2qzRGDpyN33ub_lAOm6wyWwt9PTcMA?usp=drive_link">
          <Button leftIcon={<Icon as={FiVideo} />}>動画共有</Button>
        </Link>
        
        <Link href="https://drive.google.com/drive/folders/1FD4OiQxORq0S0MFJB-dUvGljLa4b9QJZ?usp=drive_link">
          <Button leftIcon={<Icon as={FiFileText} />}>資料共有</Button>
        </Link>
      </VStack>

      <Box flex={1}>
        <Heading size="xl" mb={6} color="blue.600">
          今日も一漕ぎ、明日への飛躍
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Box
              p={6}
              borderRadius="lg"
              bgGradient="linear(to-r, blue.400, teal.500)"
              color="white"
              boxShadow="xl"
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            >
              <Heading size="md" mb={3}>
                共に漕ぎ出そう、新たな挑戦へ
              </Heading>
              <Text>
                一人一人の力が、大きな波を起こす。今日の努力が、明日の勝利を作る。
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              p={6}
              borderRadius="lg"
              bgGradient="linear(to-r, purple.400, pink.500)"
              color="white"
              boxShadow="xl"
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            >
              <Heading size="md" mb={3}>
                限界を超えろ、水面を切り裂け
              </Heading>
              <Text>
                自己ベストは、昨日の自分を超えること。チームの絆が、不可能を可能にする。
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default DashboardContent;

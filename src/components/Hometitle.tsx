import React from 'react';
import { Box, Heading, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const HomeTitle = () => {
  return (
    <Flex
      bg="blue.900"
      height="40vh"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      <MotionBox
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Heading
          color="white"
          fontSize={["3xl", "4xl", "5xl", "6xl"]}
          fontWeight="bold"
          textAlign="center"
          fontFamily="'Noto Sans JP', sans-serif"
        >
          Kyoto University Windsurfing Club
        </Heading>
      </MotionBox>
      
      
      
      <MotionBox
        position="absolute"
        right="-100px"
        bottom="-100px"
        initial={{ rotate: -10, scale: 0.8 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        
      </MotionBox>
    </Flex>
  );
};

export default HomeTitle;
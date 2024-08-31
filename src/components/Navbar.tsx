import React from 'react';
import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  VStack,
} from '@chakra-ui/react';

const HoverMenuBar = () => {

  return (
    <Box>
      <Popover trigger="hover" placement="bottom-start">
        <PopoverTrigger>
          <Button >メニュー</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody>
            <VStack align="stretch">
              <Button>オプション1</Button>
              <Button>オプション2</Button>
              <Button>オプション3</Button>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default HoverMenuBar;
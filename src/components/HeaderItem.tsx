
"use client";

// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import {
//   Link,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverBody,
//   VStack,
//   Box,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   Text,
//   AccordionIcon,
//   Center,
// } from "@chakra-ui/react";

export type MenuItems = {
  Race: string[];
  Others: string[];
  Blog: string[];
  Member: string[];
  About: string[];
};

type SubitemDomain = {
  [key: string]: string;
};

interface Schedule {
  id: number;
  event_name: string;
  start: string;
  end: string;
  result: string;
  photo: string | null;
  files: any[];
}

const item_menu: MenuItems = {
  Race: [],  // これを動的に設定します
  Others: ["OBさんへ", "SNS", "Sponsor", "Weather", "旧ウェブサイト", "部員用"],
  Blog: ["掲示板"],
  Member: ["4回生", "3回生", "2回生", "1回生", "OB", "Sail No"],
  About: ["主将挨拶", "ギャラリー"],
};

const subitem_domain: SubitemDomain = {
  "4回生": "4th",
  "3回生": "3rd",
  "2回生": "2nd",
  "1回生": "1st",
  "OBさんへ": "ob",
  Sponsor: "sponsor",
  Contact: "contact",
  掲示板: "forum",
  ブログ: "blog",
  "主将挨拶": "about",
  ギャラリー: "gallery",
  "Weather": "weather",
  "OB": "ob",
  "旧ウェブサイト": "oldweb",
  "SNS": "sns",
  "部員用": "login",
  "Sail No": "sailnumber",
};

interface HeaderItemProps {
  item: keyof MenuItems;
  isMobile?: boolean;
  onClose?: () => void;
}

const extractYears = (schedules: Schedule[]): string[] => {
  if (!schedules || schedules.length === 0) return [new Date().getFullYear().toString()];
  
  const years = schedules.map(schedule => new Date(schedule.start).getFullYear().toString());
  return [...new Set(years)].sort((a, b) => b.localeCompare(a));
};

// const HeaderItem: React.FC<HeaderItemProps> = ({ item, isMobile, onClose }) => {
//   const [years, setYears] = useState<string[]>([]);
//   const bgColor = "white";
//   const hoverBgColor = "blue.50";
//   const textColor = "black";
//   const mobileTextColor = "white";

//   useEffect(() => {
//     if (item === 'Race') {
//       const fetchSchedules = async () => {
//         try {
//           const response = await axios.get<Schedule[]>(`${process.env.NEXT_PUBLIC_API_URL}/schedule/`);
//           const extractedYears = extractYears(response.data);
//           setYears(extractedYears);
//           item_menu.Race = extractedYears;
//         } catch (error) {
//           console.error('Error fetching schedules:', error);
//         }
//       };

//       fetchSchedules();
//     }
//   }, [item]);

//   const getSubItems = (): string[] => {
//     return item === 'Race' ? years : item_menu[item];
//   };

//   if (isMobile) {
//     return (
//       <Accordion allowToggle>
//         <AccordionItem border="none">
//           <AccordionButton py={4} _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}>
//             <Box flex="1" textAlign="left">
//               <Text fontWeight="bold" color={mobileTextColor} fontSize="lg" fontFamily="'Roboto', sans-serif">
//                 {item}
//               </Text>
//             </Box>
//             <AccordionIcon color={mobileTextColor} />
//           </AccordionButton>
//           <AccordionPanel pb={4}>
//             <VStack align="stretch" spacing={2}>
              
//               {getSubItems().map((subitem: string) => (
                
//                 <Link
//                   key={subitem}
//                   href={`/${item.toLowerCase()}/${subitem_domain[subitem] || subitem}`}
//                   onClick={onClose}
//                   py={2}
//                   px={4}
//                   borderRadius="md"
//                   _hover={{ bg: "rgba(255, 255, 255, 0.1)", textDecoration: 'none' }}
//                   color={mobileTextColor}
//                   fontSize="md"
//                   fontFamily="'Roboto', sans-serif"
//                   transition="all 0.2s"
//                 >
                  
//                   {subitem}
//                 </Link>
                
//               ))}
//             </VStack>
//           </AccordionPanel>
//         </AccordionItem>
//       </Accordion>
//     );
//   }

//   return (
//     <Popover trigger="hover" placement="bottom-start">
//       <PopoverTrigger>
//         <Box
//           cursor="pointer"
//           p={2}
//           borderRadius="md"
//           _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
//           transition="all 0.3s"
//         >
//           <Text 
//             fontWeight="semibold" 
//             color="white" 
//             fontSize="lg"
//             fontFamily="'Montserrat', sans-serif"
//           >
//             {item}
//           </Text>
//         </Box>
//       </PopoverTrigger>
//       <PopoverContent 
//         bg={bgColor} 
//         borderColor="gray.200" 
//         boxShadow="lg" 
//         borderRadius="md"
//         width="auto"
//         maxWidth="300px"
//       >
//         <PopoverBody p={0}>
//           <VStack align="stretch" spacing={0}>
//             {getSubItems().map((subitem: string) => (
//               <Link
//                 key={subitem}
//                 href={`/${item.toLowerCase()}/${subitem_domain[subitem] || subitem}`}
//                 p={3}
//                 _hover={{ bg: hoverBgColor, textDecoration: 'none', color: 'black' }}
//                 color={textColor}
//                 fontWeight="medium"
//                 transition="all 0.2s"
//                 width="100%"
//                 textAlign="left"
//                 fontSize="md"
//                 fontFamily="'Roboto', sans-serif"
//               >
//                 {subitem}
//               </Link>
//             ))}
//           </VStack>
//         </PopoverBody>
//       </PopoverContent>
//     </Popover>
//   );
// };

// export default HeaderItem;
// "use client";

import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  VStack,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";

// ... (前の型定義と定数はそのまま)

const HeaderItem: React.FC<HeaderItemProps> = ({ item, isMobile, onClose }) => {
  const [years, setYears] = useState<string[]>([]);
  const bgColor = "#15317E";  // ヘッダーと同じ濃い青色
  const hoverBgColor = "rgba(255, 255, 255, 0.2)";
  const textColor = "white";
  const mobileTextColor = "white";

  useEffect(() => {
    if (item === 'Race') {
      const fetchSchedules = async () => {
        try {
          const response = await axios.get<Schedule[]>(`${process.env.NEXT_PUBLIC_API_URL}/schedule/`);
          const extractedYears = extractYears(response.data);
          setYears(extractedYears);
          item_menu.Race = extractedYears;
        } catch (error) {
          console.error('Error fetching schedules:', error);
        }
      };

      fetchSchedules();
    }
  }, [item]);

  const getSubItems = (): string[] => {
    return item === 'Race' ? years : item_menu[item];
  };

  if (isMobile) {
    return (
      <Accordion allowToggle>
        <AccordionItem border="none">
          <AccordionButton py={4} _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}>
            <Box flex="1" textAlign="left">
              <Text fontWeight="bold" color={mobileTextColor} fontSize="lg" fontFamily="'Roboto', sans-serif">
                {item}
              </Text>
            </Box>
            <AccordionIcon color={mobileTextColor} />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack align="stretch" spacing={2}>
              {getSubItems().map((subitem: string) => (
                <Link
                  key={subitem}
                  href={`/${item.toLowerCase()}/${subitem_domain[subitem] || subitem}`}
                  onClick={onClose}
                  py={2}
                  px={4}
                  borderRadius="md"
                  _hover={{ bg: "rgba(255, 255, 255, 0.1)", textDecoration: 'none' }}
                  color={mobileTextColor}
                  fontSize="md"
                  fontFamily="'Roboto', sans-serif"
                  transition="all 0.2s"
                >
                  {subitem}
                </Link>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <Popover trigger="hover" placement="bottom-start">
      <PopoverTrigger>
        <Box
          cursor="pointer"
          p={2}
          borderRadius="md"
          _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
          transition="all 0.3s"
        >
          <Text 
            fontWeight="semibold" 
            color="white" 
            fontSize="lg"
            fontFamily="'Montserrat', sans-serif"
          >
            {item}
          </Text>
        </Box>
      </PopoverTrigger>
      <PopoverContent 
        bg={bgColor}
        borderColor="transparent"
        boxShadow="lg" 
        borderRadius="md"
        width="auto"
        minWidth="100px"
      >
        <PopoverBody p={0}>
          <VStack align="stretch" spacing={0}>
            {getSubItems().map((subitem: string) => (
              <Link
                key={subitem}
                href={`/${item.toLowerCase()}/${subitem_domain[subitem] || subitem}`}
                py={3}
                px={4}
                _hover={{ bg: hoverBgColor, textDecoration: 'none' }}
                color={textColor}
                fontWeight="medium"
                transition="all 0.2s"
                width="100%"
                textAlign="center"
                fontSize="md"
                fontFamily="'Roboto', sans-serif"
              >
                {subitem}
              </Link>
            ))}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default HeaderItem;